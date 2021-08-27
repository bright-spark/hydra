# Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved
import sys
from textwrap import dedent

from difflib import unified_diff
from pathlib import Path
from typing import Any

from pytest import mark, param

from hydra.utils import get_class, instantiate, ConvertMode
from omegaconf import OmegaConf

from configen.config import ConfigenConf, ModuleConf, Flags
from configen.configen import generate_module
from hydra.test_utils.test_utils import chdir_hydra_root, run_python_script
from tests.test_modules import (
    User,
    Color,
    Empty,
    UntypedArg,
    IntArg,
    UnionArg,
    WithLibraryClassArg,
    LibraryClass,
    IncompatibleDataclassArg,
    IncompatibleDataclass,
    WithStringDefault,
    WithUntypedStringDefault,
    ListValues,
    DictValues,
    PeskySentinelUsage,
    Tuples,
)

from tests.test_modules.generated import PeskySentinelUsageConf

chdir_hydra_root(subdir="tools/configen")

##
# To re-generate the expected config run the following command from configen's root directory (tools/configen).
#
# PYTHONPATH=. configen --config-dir tests/gen-test-expected/
#
##
conf: ConfigenConf = OmegaConf.structured(
    ConfigenConf(
        header="""# Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved
# Generated by configen, do not edit.
# See https://github.com/facebookresearch/hydra/tree/main/tools/configen
# fmt: off
# isort:skip_file
# flake8: noqa
"""
    )
)


MODULE_NAME = "tests.test_modules"


def test_generated_code() -> None:
    classes = [
        "Empty",
        "UntypedArg",
        "IntArg",
        "UnionArg",
        "WithLibraryClassArg",
        "IncompatibleDataclassArg",
        "WithStringDefault",
        "WithUntypedStringDefault",
        "ListValues",
        "DictValues",
        "Tuples",
        "PeskySentinelUsage",
    ]
    expected_file = Path(MODULE_NAME.replace(".", "/")) / "generated.py"
    expected = expected_file.read_text()

    generated = generate_module(
        cfg=conf,
        module=ModuleConf(
            name=MODULE_NAME,
            classes=classes,
        ),
    )
    _assert_expected_output(generated, expected, expected_file)


@mark.skipif(sys.version_info < (3, 7), reason="requires Python 3.7")
def test_generated_code_future_ann() -> None:
    classes = ["ExampleClass"]
    expected_file = (
        Path(MODULE_NAME.replace(".", "/")) / "generated_future_annotations.py"
    )
    expected = expected_file.read_text()

    generated = generate_module(
        cfg=conf,
        module=ModuleConf(
            name=MODULE_NAME + ".future_annotations",
            classes=classes,
        ),
    )
    _assert_expected_output(generated, expected, expected_file)


def _assert_expected_output(generated: str, expected: str, expected_file: Path) -> None:
    lines = [
        line
        for line in unified_diff(
            expected.splitlines(),
            generated.splitlines(),
            fromfile=str(expected_file),
            tofile="Generated",
        )
    ]

    diff = "\n".join(lines)
    if generated != expected:
        print(diff)
        assert False, f"Mismatch between {expected_file} and generated code"


@mark.parametrize(
    "classname, default_flags, expected_filename",
    [
        param("Empty", Flags(), "noflags.py", id="noflags"),
        param("Empty", Flags(_convert_=ConvertMode.ALL), "convert.py", id="convert"),
        param("Empty", Flags(_recursive_=True), "recursive.py", id="recursive"),
        param(
            "Empty",
            Flags(
                _convert_=ConvertMode.ALL,
                _recursive_=True,
            ),
            "both.py",
            id="both",
        ),
    ],
)
def test_generated_code_with_default_flags(
    classname: str, default_flags: Flags, expected_filename: str
) -> None:
    expected_file = (
        Path(MODULE_NAME.replace(".", "/")) / "default_flags" / expected_filename
    )
    expected = expected_file.read_text()

    generated = generate_module(
        cfg=conf,
        module=ModuleConf(
            name=MODULE_NAME, classes=[classname], default_flags=default_flags
        ),
    )

    lines = [
        line
        for line in unified_diff(
            expected.splitlines(),
            generated.splitlines(),
            fromfile=str(expected_file),
            tofile="Generated",
        )
    ]

    diff = "\n".join(lines)
    if generated != expected:
        print(diff)
        assert False, f"Mismatch between {expected_file} and generated code"


@mark.parametrize(
    "classname, params, args, kwargs, expected",
    [
        param("Empty", {}, [], {}, Empty(), id="Empty"),
        param(
            "UntypedArg", {"param": 11}, [], {}, UntypedArg(param=11), id="UntypedArg"
        ),
        param(
            "UntypedArg",
            {},
            [],
            {"param": LibraryClass()},
            UntypedArg(param=LibraryClass()),
            id="UntypedArg_passthrough_lib_class",
        ),
        param("IntArg", {"param": 1}, [], {}, IntArg(param=1), id="IntArg"),
        param("UnionArg", {"param": 1}, [], {}, UnionArg(param=1), id="UnionArg"),
        param("UnionArg", {"param": 3.14}, [], {}, UnionArg(param=3.14), id="UnionArg"),
        # This is okay because Union is not supported and is treated as Any
        param(
            "UnionArg",
            {"param": "str"},
            [],
            {},
            UnionArg(param="str"),
            id="UnionArg:illegal_but_ok_arg",
        ),
        param(
            "WithLibraryClassArg",
            {"num": 10},
            [],
            {"param": LibraryClass()},
            WithLibraryClassArg(num=10, param=LibraryClass()),
            id="WithLibraryClassArg",
        ),
        param(
            "IncompatibleDataclassArg",
            {"num": 10},
            [],
            {"incompat": IncompatibleDataclass()},
            IncompatibleDataclassArg(num=10, incompat=IncompatibleDataclass()),
            id="IncompatibleDataclassArg",
        ),
        param(
            "WithStringDefault",
            {"no_default": "foo"},
            [],
            {},
            WithStringDefault(no_default="foo"),
            id="WithStringDefault",
        ),
        param(
            "WithUntypedStringDefault",
            {"default_str": "foo"},
            [],
            {},
            WithUntypedStringDefault(default_str="foo"),
            id="WithUntypedStringDefault",
        ),
        param(
            "ListValues",
            {
                "lst": ["1"],
                "enum_lst": ["RED"],
                "dataclass_val": [{"name": "Bond", "age": 7}],
            },
            [],
            {"passthrough_list": [LibraryClass()]},
            ListValues(
                lst=["1"],
                enum_lst=[Color.RED],
                passthrough_list=[LibraryClass()],
                dataclass_val=[User(name="Bond", age=7)],
            ),
            id="ListValues",
        ),
        param(
            "DictValues",
            {
                "dct": {"foo": "bar"},
                "enum_key": {"RED": "red"},
                "dataclass_val": {"007": {"name": "Bond", "age": 7}},
            },
            [],
            {"passthrough_dict": {"lib": LibraryClass()}},
            DictValues(
                dct={"foo": "bar"},
                enum_key={Color.RED: "red"},
                dataclass_val={"007": User(name="Bond", age=7)},
                passthrough_dict={"lib": LibraryClass()},
            ),
            id="DictValues",
        ),
        param("Tuples", {"t1": [1.0, 2.1]}, [], {}, Tuples(t1=(1.0, 2.1)), id="Tuples"),
        param(
            "PeskySentinelUsage",
            {},
            [],
            {"foo": 10.11},
            PeskySentinelUsage(foo=10.11),
            id="PeskySentinelUsage",
        ),
    ],
)
def test_instantiate_classes(
    classname: str, params: Any, args: Any, kwargs: Any, expected: Any
) -> None:
    full_class = f"{MODULE_NAME}.generated.{classname}Conf"
    schema = OmegaConf.structured(get_class(full_class))
    cfg = OmegaConf.merge(schema, params)
    obj = instantiate(config=cfg, *args, **kwargs)
    assert obj == expected


def test_example_application(monkeypatch: Any, tmpdir: Path):
    monkeypatch.chdir("example")
    cmd = [
        "my_app.py",
        f"hydra.run.dir={tmpdir}",
        "user.name=Batman",
    ]
    result, _err = run_python_script(cmd)
    assert result == dedent(
        """\
    User: name=Batman, age=7
    Admin: name=Lex Luthor, age=10, private_key=deadbeef"""
    )
