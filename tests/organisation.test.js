import request from 'supertest';
import app from '../src/app';
import Organisation from '../src/models/organisation';

const orgOne = {
  name: `Test organisation`,
  year: 2010,
  revenue: 2345678
};

beforeEach(async () => {
  await Organisation.deleteMany();
  await new Organisation(orgOne).save();
});

describe('POST /organisations', () => {
  it('should create new organisation', async () => {
    const response = await request(app)
      .post('/organisations')
      .send({
        name: `Test organisation ${Math.random()}`,
        year: 2010,
        revenue: 2345678
      })
      .expect(201);

    const organisation = await Organisation.findById(response.body._id);
    expect(organisation).not.toBeNull();
  });
});

describe('GET /organisations', () => {
  it('should get all organisations', async () => {
    await request(app)
      .get('/organisations')
      .expect(200);
  });
});

describe('GET /organisations/:id', () => {
  it('should get an organisation', async () => {
    const response = await request(app)
      .get(`/organisations`)
      .expect(200);

    const organisation = await Organisation.findById(response.body[0]._id);
    expect(organisation).not.toBeNull();
  });
});

describe('UPDATE /organisations/:id', () => {
  it('should update an organisation', done => {
    request(app)
      .post('/organisations')
      .send({
        name: 'Test org',
        year: 2011,
        revenue: 12345678
      })
      .expect(201)
      .end((err, res) => {
        request(app)
          .put(`/organisations/${res.body._id}`)
          .send({ name: 'Test org again' })
          .expect(200);
        done(err);
      });
  });
});

describe('DELETE /organisations/:id', () => {
  it('should delete an organisation', async () => {
    const response = await request(app)
      .post('/organisations')
      .send({
        name: 'Test org',
        year: 2011,
        revenue: 12345678
      })
      .expect(201);

    await request(app)
      .delete(`/organisations/${response.body._id}`)
      .expect(200);
  });
});
