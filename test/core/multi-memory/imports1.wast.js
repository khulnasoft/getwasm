
// imports1.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7f\x02\xd1\x80\x80\x80\x00\x04\x08\x73\x70\x65\x63\x74\x65\x73\x74\x06\x6d\x65\x6d\x6f\x72\x79\x02\x01\x01\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x06\x6d\x65\x6d\x6f\x72\x79\x02\x01\x01\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x06\x6d\x65\x6d\x6f\x72\x79\x02\x01\x01\x02\x08\x73\x70\x65\x63\x74\x65\x73\x74\x06\x6d\x65\x6d\x6f\x72\x79\x02\x01\x01\x02\x03\x82\x80\x80\x80\x00\x01\x00\x07\x88\x80\x80\x80\x00\x01\x04\x6c\x6f\x61\x64\x00\x00\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x00\x20\x00\x28\x42\x02\x00\x0b\x0b\x88\x80\x80\x80\x00\x01\x02\x02\x41\x0a\x0b\x01\x10");

// imports1.wast:12
assert_return(() => call($1, "load", [0]), 0);

// imports1.wast:13
assert_return(() => call($1, "load", [10]), 16);

// imports1.wast:14
assert_return(() => call($1, "load", [8]), 1_048_576);

// imports1.wast:15
assert_trap(() => call($1, "load", [1_000_000]));
