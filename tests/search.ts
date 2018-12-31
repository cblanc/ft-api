import { assert } from "chai";
import { Client } from "../lib/index";
import { key } from "./helpers/api";

describe("Search", () => {
  let client: Client;

  beforeEach(() => {
    client = new Client({ key });
  });

  it ("searches ft content API", async () => {
    const response = await client.search({ queryString: "Trump" });
    assert.equal(response.status, 200);
  });
});
