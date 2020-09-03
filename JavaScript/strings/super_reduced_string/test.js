const { super_reduced_string_v1, super_reduced_string_v2, super_reduced_string_v3} = require('./index')

test("Super Reduced String: aa", () =>{
    expect(super_reduced_string_v1("aab")).toBe("b")
    expect(super_reduced_string_v2("aab")).toBe("b")
    expect(super_reduced_string_v3("aab")).toBe("b")
})

test("Super Reduced String: aaabccddd", () =>{
    expect(super_reduced_string_v1("aaabccddd")).toBe("abd")
    expect(super_reduced_string_v2("aaabccddd")).toBe("abd")
    expect(super_reduced_string_v3("aaabccddd")).toBe("abd")
})

test("Super Reduced String: aaabccddd", () =>{
    expect(super_reduced_string_v1("txxmubonuhlaryeuujgftedrmmhmaadxrplneqpwhsketqicdpqlecluydmgykrubgmpwfqviabkjoiqdftbbwwgiuudmgrdbkrr"))
    .toBe("tmubonuhlaryejgftedrhmdxrplneqpwhsketqicdpqlecluydmgykrubgmpwfqviabkjoiqdftgidmgrdbk")
    expect(super_reduced_string_v2("txxmubonuhlaryeuujgftedrmmhmaadxrplneqpwhsketqicdpqlecluydmgykrubgmpwfqviabkjoiqdftbbwwgiuudmgrdbkrr"))
    .toBe("tmubonuhlaryejgftedrhmdxrplneqpwhsketqicdpqlecluydmgykrubgmpwfqviabkjoiqdftgidmgrdbk")
    expect(super_reduced_string_v3("txxmubonuhlaryeuujgftedrmmhmaadxrplneqpwhsketqicdpqlecluydmgykrubgmpwfqviabkjoiqdftbbwwgiuudmgrdbkrr"))
    .toBe("tmubonuhlaryejgftedrhmdxrplneqpwhsketqicdpqlecluydmgykrubgmpwfqviabkjoiqdftgidmgrdbk")
})