'use strict';

// const Database = use ('Database');
// const sanitize = use ('sqlstring');
// const Hash = use ('Hash');

const User = use ('App/Models/User');

class UserController {
  async register({request, response}) {
    try {
      //   const post = request.post ();

      //   const safePassword = await Hash.make (post.password, 20);
      //   const safePassword = await Hash.make(request.input('password'), 20)

      //   await Database.raw (`
      //     INSERT INTO users (f_name, l_name, email, phone_number, birth_date, password)
      //     Values(
      //         ${sanitize.escape (post.f_name)},
      //         ${sanitize.escape (post.l_name)},
      //         ${sanitize.escape (post.email)},
      //         ${sanitize.escape (post.phone_number)},
      //         ${sanitize.escape (post.birth_date)},
      //         ${sanitize.escape (post.password)}
      //     )
      // `);

      const {
        f_name,
        l_name,
        email,
        phone_number,
        birth_date,
        password,
      } = request.only ([
        'f_name',
        'l_name',
        'email',
        'phone_number',
        'birth_date',
        'password',
      ]);

      await User.create ({
        f_name,
        l_name,
        email,
        phone_number,
        birth_date,
        password,
      });

      return response.send ({message: 'User has been created!'});
    } catch (error) {
      console.log (error);
      return response.status (500);
    }
  }

  async login({request, response, auth}) {
    const {email, password} = request.only (['email', 'password']);

    const token = await auth.attempt (email, password);
    return response.json (token);
  }

  async getUser({params, response}) {
    const user = await User.find (params.id);
    
    const res = {
      f_name: user.f_name,
      l_name: user.l_name,
      email: user.email,
    };

    return response.json (res);
  }
}

module.exports = UserController;
