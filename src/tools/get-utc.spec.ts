import { afterEach, describe, expect, it, vi } from "vitest";
import getCurrentUTC from "./get-utc.js";

describe("getCurrentUTC", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return a date in ISO format", () => {
    const result = getCurrentUTC();
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
  });

  it("should return the current UTC time", () => {
    const mockDate = new Date("2023-01-01T12:00:00.000Z");
    const spy = vi.spyOn(global, "Date").mockImplementation(() => mockDate);

    const result = getCurrentUTC();

    expect(result).toBe("2023-01-01T12:00:00.000Z");
    expect(spy).toHaveBeenCalled();
  });
});
