
// stack.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x03\x60\x01\x7e\x01\x7e\x60\x00\x01\x7f\x60\x00\x00\x03\x89\x80\x80\x80\x00\x08\x00\x00\x00\x00\x00\x01\x02\x01\x06\x86\x80\x80\x80\x00\x01\x7f\x01\x41\x00\x0b\x07\xd7\x80\x80\x80\x00\x06\x08\x66\x61\x63\x2d\x65\x78\x70\x72\x00\x00\x09\x66\x61\x63\x2d\x73\x74\x61\x63\x6b\x00\x01\x0d\x66\x61\x63\x2d\x73\x74\x61\x63\x6b\x2d\x72\x61\x77\x00\x02\x09\x66\x61\x63\x2d\x6d\x69\x78\x65\x64\x00\x03\x0d\x66\x61\x63\x2d\x6d\x69\x78\x65\x64\x2d\x72\x61\x77\x00\x04\x10\x6e\x6f\x74\x2d\x71\x75\x69\x74\x65\x2d\x61\x2d\x74\x72\x65\x65\x00\x07\x0a\xaf\x82\x80\x80\x00\x08\xaf\x80\x80\x80\x00\x01\x02\x7e\x20\x00\x21\x01\x42\x01\x21\x02\x02\x40\x03\x40\x20\x01\x42\x00\x51\x04\x40\x0c\x02\x05\x20\x01\x20\x02\x7e\x21\x02\x20\x01\x42\x01\x7d\x21\x01\x0b\x0c\x00\x0b\x0b\x20\x02\x0b\xaf\x80\x80\x80\x00\x01\x02\x7e\x20\x00\x21\x01\x42\x01\x21\x02\x02\x40\x03\x40\x20\x01\x42\x00\x51\x04\x40\x0c\x02\x05\x20\x01\x20\x02\x7e\x21\x02\x20\x01\x42\x01\x7d\x21\x01\x0b\x0c\x00\x0b\x0b\x20\x02\x0b\xaf\x80\x80\x80\x00\x01\x02\x7e\x20\x00\x21\x01\x42\x01\x21\x02\x02\x40\x03\x40\x20\x01\x42\x00\x51\x04\x40\x0c\x02\x05\x20\x01\x20\x02\x7e\x21\x02\x20\x01\x42\x01\x7d\x21\x01\x0b\x0c\x00\x0b\x0b\x20\x02\x0b\xaf\x80\x80\x80\x00\x01\x02\x7e\x20\x00\x21\x01\x42\x01\x21\x02\x02\x40\x03\x40\x20\x01\x42\x00\x51\x04\x40\x0c\x02\x05\x20\x01\x20\x02\x7e\x21\x02\x20\x01\x42\x01\x7d\x21\x01\x0b\x0c\x00\x0b\x0b\x20\x02\x0b\xaf\x80\x80\x80\x00\x01\x02\x7e\x20\x00\x21\x01\x42\x01\x21\x02\x02\x40\x03\x40\x20\x01\x42\x00\x51\x04\x40\x0c\x02\x05\x20\x01\x20\x02\x7e\x21\x02\x20\x01\x42\x01\x7d\x21\x01\x0b\x0c\x00\x0b\x0b\x20\x02\x0b\x8d\x80\x80\x80\x00\x01\x01\x7f\x41\x01\x23\x00\x6a\x24\x00\x23\x00\x0b\x85\x80\x80\x80\x00\x00\x10\x05\x1a\x0b\x89\x80\x80\x80\x00\x00\x10\x05\x10\x05\x10\x06\x6a\x0b");

// stack.wast:146
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7e\x01\x7e\x02\x84\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x08\x66\x61\x63\x2d\x65\x78\x70\x72\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xa2\x80\x80\x80\x00\x01\x9c\x80\x80\x80\x00\x00\x02\x40\x42\x19\x10\x00\x01\x42\x80\x80\x80\xde\x87\x92\xec\xcf\xe1\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "fac-expr", [int64("25")]), int64("7_034_535_277_573_963_776"))

// stack.wast:147
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7e\x01\x7e\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x66\x61\x63\x2d\x73\x74\x61\x63\x6b\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xa2\x80\x80\x80\x00\x01\x9c\x80\x80\x80\x00\x00\x02\x40\x42\x19\x10\x00\x01\x42\x80\x80\x80\xde\x87\x92\xec\xcf\xe1\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "fac-stack", [int64("25")]), int64("7_034_535_277_573_963_776"))

// stack.wast:148
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x6f\x01\x7f\x60\x01\x70\x01\x7f\x60\x02\x6f\x6f\x01\x7f\x60\x02\x70\x70\x01\x7f\x60\x01\x7e\x01\x7e\x02\x85\x81\x80\x80\x00\x06\x06\x6d\x6f\x64\x75\x6c\x65\x09\x66\x61\x63\x2d\x6d\x69\x78\x65\x64\x00\x06\x08\x73\x70\x65\x63\x74\x65\x73\x74\x09\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x69\x73\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x69\x73\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x03\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0c\x65\x71\x5f\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x0a\x65\x71\x5f\x66\x75\x6e\x63\x72\x65\x66\x00\x05\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x06\x0a\xa2\x80\x80\x80\x00\x01\x9c\x80\x80\x80\x00\x00\x02\x40\x42\x19\x10\x00\x01\x42\x80\x80\x80\xde\x87\x92\xec\xcf\xe1\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports($1)),  "run", []));  // assert_return(() => call($1, "fac-mixed", [int64("25")]), int64("7_034_535_277_573_963_776"))

// stack.wast:150
assert_return(() => call($1, "not-quite-a-tree", []), 3);

// stack.wast:151
assert_return(() => call($1, "not-quite-a-tree", []), 9);

// stack.wast:156
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8c\x80\x80\x80\x00\x03\x60\x00\x00\x60\x00\x01\x7f\x60\x01\x7f\x00\x03\x82\x80\x80\x80\x00\x01\x00\x04\x84\x80\x80\x80\x00\x01\x70\x00\x01\x0a\xb7\x83\x80\x80\x00\x01\xb1\x83\x80\x80\x00\x00\x02\x40\x41\x00\x11\x00\x00\x0b\x03\x40\x41\x00\x11\x00\x00\x0b\x41\x00\x04\x40\x41\x00\x11\x00\x00\x0b\x41\x00\x04\x40\x41\x00\x11\x00\x00\x05\x41\x00\x11\x00\x00\x0b\x02\x40\x41\x00\x11\x00\x00\x0b\x03\x40\x41\x00\x11\x00\x00\x0b\x41\x00\x04\x40\x41\x00\x11\x00\x00\x0b\x41\x00\x04\x40\x41\x00\x11\x00\x00\x05\x41\x00\x11\x00\x00\x0b\x02\x40\x41\x00\x41\x00\x11\x02\x00\x0b\x03\x40\x41\x00\x41\x00\x11\x02\x00\x0b\x41\x00\x04\x40\x41\x00\x41\x00\x11\x02\x00\x0b\x41\x00\x04\x40\x41\x00\x41\x00\x11\x02\x00\x05\x41\x00\x41\x00\x11\x02\x00\x0b\x02\x7f\x41\x00\x11\x01\x00\x0b\x1a\x03\x7f\x41\x00\x11\x01\x00\x0b\x1a\x41\x00\x04\x7f\x41\x00\x11\x01\x00\x05\x41\x00\x11\x01\x00\x0b\x1a\x02\x40\x41\x00\x11\x00\x00\x0b\x03\x40\x41\x00\x11\x00\x00\x0b\x41\x00\x04\x40\x41\x00\x11\x00\x00\x0b\x41\x00\x04\x40\x41\x00\x11\x00\x00\x05\x41\x00\x11\x00\x00\x0b\x02\x40\x41\x00\x11\x00\x00\x0b\x03\x40\x41\x00\x11\x00\x00\x0b\x41\x00\x04\x40\x41\x00\x11\x00\x00\x0b\x41\x00\x04\x40\x41\x00\x11\x00\x00\x05\x41\x00\x11\x00\x00\x0b\x02\x40\x41\x00\x11\x00\x00\x0b\x03\x40\x41\x00\x11\x00\x00\x0b\x41\x00\x04\x40\x41\x00\x11\x00\x00\x0b\x41\x00\x04\x40\x41\x00\x11\x00\x00\x05\x41\x00\x11\x00\x00\x0b\x02\x40\x41\x00\x41\x00\x11\x02\x00\x0b\x03\x40\x41\x00\x41\x00\x11\x02\x00\x0b\x41\x00\x04\x40\x41\x00\x41\x00\x11\x02\x00\x0b\x41\x00\x04\x40\x41\x00\x41\x00\x11\x02\x00\x05\x41\x00\x41\x00\x11\x02\x00\x0b\x02\x7f\x41\x00\x11\x01\x00\x0b\x1a\x03\x7f\x41\x00\x11\x01\x00\x0b\x1a\x41\x00\x04\x7f\x41\x00\x11\x01\x00\x05\x41\x00\x11\x01\x00\x0b\x1a\x02\x40\x41\x00\x11\x00\x00\x0b\x03\x40\x41\x00\x11\x00\x00\x0b\x41\x00\x04\x40\x41\x00\x11\x00\x00\x0b\x41\x00\x04\x40\x41\x00\x11\x00\x00\x05\x41\x00\x11\x00\x00\x0b\x41\x00\x11\x00\x00\x0b");
