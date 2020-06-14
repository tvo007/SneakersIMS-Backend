'use strict';
const Database = use ('Database');
const sanitize = use ('sqlstring');

class BrandController {
  async getAll({view, request, response}) {
    try {
      let allBrands = await Database.raw (`
        SELECT brands.id, brands.title, brands.img_url, brands.user_id,
        concat(users.f_name, ' ', users.l_name) as user, brands.created_at, brands.updated_at From brands
        INNER JOIN users
        ON brands.user_id = users.id
        ORDER BY brands.title ASC
      `);
      allBrands = allBrands[0];

      return response.json ({allBrands});
    } catch (error) {
      console.log (error);
      return response.status (500);
    }
  }
  async store({request, response}) {
    try {
      const post = request.post ();
      await Database.raw (`
        INSERT INTO brands (title, img_url, description, user_id)
        Values(${sanitize.escape (post.title)},
        ${sanitize.escape (post.img_url)},
        ${sanitize.escape (post.description)},
        ${parseInt (1)})
      `);

      return response.json ({post});
    } catch (error) {
      console.log (error);
      return response.status (500);
      // `<h1 style="color: red">there was an error</h1>
      // <h3>${error.sqlMessage}</h3>
      // `
    }
  }

  async getOne({view, request, response, params}) {
    try {
      let brand = await Database.raw (`
        SELECT brands.id,
        brands.title, brands.img_url, brands.description,
        concat(users.f_name, ' ', users.l_name) as user,
        brands.user_id, brands.created_at, brands.updated_at
        FROM brands
        INNER JOIN users
        ON brands.user_id = users.id
        WHERE brands.id = ${params.id}
        LIMIT 1
      `);
      brand = brand[0][0];

      return response.json ({brand});
    } catch (error) {
      console.log (error);
      return response.status (500);
    }
  }

  async update({request, response, params}) {
    try {
      const id = params.id;
      const post = request.post ();
      await Database.raw (`
        UPDATE brands
        SET
        title = ${sanitize.escape (post.title)},
        img_url = ${sanitize.escape (post.img_url)},
        description = ${sanitize.escape (post.description)}
        WHERE id = ${id}
      `);

      return response.json ({post});
    } catch (error) {
      console.log (error);
      return response.status (500);
    }
  }

  async delete({request, response, params}) {
    try {
      const id = params.id;
      await Database.raw (`
        DELETE FROM brands
        WHERE id = ${id}
      `);

      return response.json ('Success!');
    } catch (error) {
      console.log (error);
      return response.status (500);
    }
  }
}

module.exports = BrandController;
