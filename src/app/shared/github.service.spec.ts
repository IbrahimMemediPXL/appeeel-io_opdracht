import { TestBed, async, inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { GithubService } from './github.service';

const BASE_URL = 'https://api.github.com';
const USERNAME = 'username';
const REPO = 'repo';
const RETURNED_DATA = 'returned data';

describe('Service: Github', () => {

  let service: GithubService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
			providers: [
				GithubService
			]
		});

		service = TestBed.get(GithubService);
    httpMock = TestBed.get(HttpTestingController)
	});

  it('should ...', inject([GithubService], (service: GithubService) => {
    expect(service).toBeTruthy();
  }));

  it('correctly calls the server when fetching data for github profile info', (done: DoneFn) => {
    let result = service.getProfileInfo(USERNAME);

    result.subscribe((data) => {
      expect(data.results).toEqual(RETURNED_DATA);
      done();
    });

    let request = httpMock.expectOne(`${BASE_URL}/users/${USERNAME}`);
			expect(request.request.method).toBe('GET');
			request.flush({results: RETURNED_DATA});

			httpMock.verify();
  });

  it('correctly calls the server when fetching data for github public repos', (done: DoneFn) => {
    let result = service.getRublicRepos(USERNAME);

    result.subscribe((data) => {
      expect(data.results).toEqual(RETURNED_DATA);
      done();
    });

    let request = httpMock.expectOne(`${BASE_URL}/users/${USERNAME}/repos`);
			expect(request.request.method).toBe('GET');
			request.flush({results: RETURNED_DATA});

			httpMock.verify();
  });

  it('correctly calls the server when fetching data for github repo commits', (done: DoneFn) => {
    let result = service.getRepoCommits(USERNAME, REPO);

    result.subscribe((data) => {
      expect(data.results).toEqual(RETURNED_DATA);
      done();
    });

    let request = httpMock.expectOne(`${BASE_URL}/repos/${USERNAME}/${REPO}/commits`);
			expect(request.request.method).toBe('GET');
			request.flush({results: RETURNED_DATA});

			httpMock.verify();
  });
});
