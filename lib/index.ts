import Axios from "axios";
import { 
  AxiosInstance,
  AxiosResponse,
} from "axios";

/**
 * FtClientOptions
 */
export interface FtClientOptions extends Partial<Optionals> {
  key: string;
}

export interface SearchResponse {
  query: QueryResponse;
}

type Curation =     "ARTICLES" | 
                     "BLOGS" |
                     "PAGES" |
                     "PODCASTS" |
                     "VIDEOS";

interface ResultContext {
  maxResults: number;
  offset: number;
  contextual: boolean;
  highlight: boolean;
}

interface Result {
  aspectSet: string;
  modelVersion: string;
  id: string;
  apiUrl: string;
}

interface ResultContainer {
  indexCount: number;
  curations: Curation[];
  results: Result[];
}

interface QueryContext {
  curations: Curation[];
}

export interface QueryResponse {
  queryString: string;
  queryContext: QueryContext[];
  resultContext: ResultContext;
}

export interface SearchOptions {
  queryString: string;
}

interface Optionals {
  host: string;
}

const DEFAULTS: Optionals = {
  host: "api.ft.com",
};

/**
 * Client
 */
export class Client {
  public key: string;
  public axios: AxiosInstance;
  protected host: string;

  /**
   * constructor
   *
   * @param {FtClientOptions} options
   */
  constructor(options: FtClientOptions) {
    this.key = options.key;
    this.host = options.host || DEFAULTS.host;
    const axios = this.axios = Axios.create({});
    axios.defaults.headers.common["X-Api-Key"] = this.key;
    axios.defaults.headers.common["X-Requested-With"] = "github.com/cblanc/ft-api";
  } 
  
  
  /**
   * Generates a url for a given resource 
   *
   * @param {string} resource e.g. "content/search/v1"
   * @returns {string}
   */
  public url(resource: string): string {
    return `https://${this.host}/${resource}`;
  }

  /**
   * Search FT content
   *
   * @param {SearchOptions} options
   * @returns {undefined}
   */
  public search (options: SearchOptions): Promise<AxiosResponse<QueryResponse>> {
    return this.axios.post(this.url("/content/search/v1"), options);
  }
}

