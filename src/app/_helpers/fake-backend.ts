import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
 
export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    
    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {
          
            if(connection.request.url.endsWith('/api/areas') && connection.request.method === RequestMethod.Get){
                connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: [{
                                "address": "Calle Mar Adriático, 12, 28221 Majadahonda, Madrid, Spain",
                                "variables": {
                                    "population": 9084,
                                    "is_reference": true,
                                    "indexes": {
                                        "population": "3",
                                        "unemployment": "1",
                                        "commercial_activity": "6",
                                        "wealth": "7",
                                        "traffic": "4",
                                        "foreigners": "1",
                                        "dependency_rate": "2"
                                    }
                                }
                            }, {
                                "address": "Calle Volver a Empezar, 5, 28018, Madrid, Madrid, Spain",
                                "variables": {
                                    "population": "5759",
                                    "is_reference": false,
                                    "indexes": {
                                        "population": "4",
                                        "unemployment": "7",
                                        "commercial_activity": "1",
                                        "wealth": "3",
                                        "traffic": "2",
                                        "foreigners": "2",
                                        "dependency_rate": "6"
                                    }
                                }
                            }, {
                                "address": "Calle de la Virgen de los Peligros, 13, 28410, Manzanares el Real, Madrid, Spain",
                                "variables": {
                                    "population": "1523",
                                    "is_reference": false,
                                    "indexes": {
                                        "population": "5",
                                        "unemployment": "3",
                                        "commercial_activity": "7",
                                        "wealth": "5",
                                        "traffic": "1",
                                        "foreigners": "2",
                                        "dependency_rate": "4"
                                    }
                                }
                            }]
                    })));
            } else {

                // pass through any requests not handled above
            let realHttp = new Http(realBackend, options);
            let requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                    connection.mockRespond(response);
                },
                (error: any) => {
                    connection.mockError(error);
                });
            }
            
  
        }, 500);
 
    });
 
    return new Http(backend, options);
};
 
export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};