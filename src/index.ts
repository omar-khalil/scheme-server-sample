import {run_server} from 'scheme/src/run_server';

run_server({
  get_user: async ({user_id}) => {
    console.log(`Getting ${user_id}`);
    if (user_id === 'error') {
      return {
        status: 404,
        data: {
          message: `${user_id} not found!`
        }
      }
    }
    return {
      status: 200,
      data: {
        name: "name!",
        age: 123,
        user_type: 'teacher',
      }
    };
  },

  post_user: async ({name, age, user_type}) => {
    console.log(`Posting ${name} who is a ${age} year-old ${user_type}`);
    return {
      status: 200,
      data: {
        user_id: "user id!",
      }
    };
  },

  delete_user: async ({user_id}) => {
    console.log(`Deleting ${user_id}`);
    return {
      status: 200,
      data: {
        message: `Successfully deleted ${user_id}`,
      }
    };
  },
});
