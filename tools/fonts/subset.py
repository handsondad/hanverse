"""切小篆子集并改名：python subset.py <完整字体> <输出 woff2> <字>

OFL 字体改过（包括切子集）就是衍生字体，不能沿用原来的保留字体名，所以改叫 HanSeal Core，
并写明来源和许可。
"""
import sys

from fontTools import subset
from fontTools.ttLib import TTFont

source, target, text = sys.argv[1], sys.argv[2], sys.argv[3]

options = subset.Options()
options.flavor = "woff2"
options.layout_features = ["*"]
options.name_IDs = []
options.notdef_outline = True

font = TTFont(source)
subsetter = subset.Subsetter(options)
subsetter.populate(text=text)
subsetter.subset(font)

names = {
    0: "Derived from Shuowen Seal (yigezi), which merges Kaiyuan Small Seal (SIL OFL 1.1) "
       "and the CNS11643 Shuowen font (數位發展部，CNS11643中文標準交換碼全字庫網站，https://www.cns11643.gov.tw, OGDL-Taiwan-1.0).",
    1: "HanSeal Core",
    2: "Regular",
    4: "HanSeal Core Regular",
    6: "HanSealCore-Regular",
    13: "This Font Software is licensed under the SIL Open Font License, Version 1.1.",
    14: "https://openfontlicense.org",
}
table = font["name"]
for name_id, value in names.items():
    table.setName(value, name_id, 3, 1, 0x409)

font.save(target)
