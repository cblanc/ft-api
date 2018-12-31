import { assert } from "chai";
import { Client } from "../lib/index";
import { key } from "./helpers/api";

describe("Client", () => {
  let client: Client;

  before(() => {
    client = new Client({ key });
  });

	it ("instantiates a client with correct attributes", () => {
    assert.equal(client.key, key);
    const headers = client.axios.defaults.headers.common;
    assert.equal(headers["X-Api-Key"], key);
    assert.equal(headers["X-Requested-With"], "github.com/cblanc/ft-api");
	});

  describe("url", () => {
    it ("generates a url for a resource", () => {
      assert.equal(client.url("foo"), "https://api.ft.com/foo");
    });
  });
});

