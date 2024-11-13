import { assertEquals } from "@std/assert";
import { memoFactory } from "./main.ts";

Deno.test(function testmemoizedClosure() {
  const memoClosure = memoFactory(10);
  assertEquals(memoClosure(9), "calculated");
  assertEquals(memoClosure(9), "cached");
});
