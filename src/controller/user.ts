import * as services from '../services/user';

const getUsers = async (req, res, next) => {
  
  try {
    res.send(await services.getUsers(req.params));
  }
  catch (error) {
    res.send(error);  
  }

}

export {
  getUsers
}