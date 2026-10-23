import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js';
describe('GET /', () => {
    it('returns HTTP 200', async () => {
        const response = await request(app).get('/');
        expect(response.status).to.equal(200);
    });
    it('returns the expected greeting', async () => {
        const response = await request(app).get('/');
        expect(response.text).to.equal('Hello, GitHub Actions!');
    });
});