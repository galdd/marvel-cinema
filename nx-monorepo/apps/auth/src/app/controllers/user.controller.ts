import e, { Request, Response, NextFunction } from 'express';
import { User } from '../model/User';
import { v4 as uuidv4 } from 'uuid';
import hashPassword from '../utils/hashPassword';

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = req.query.new;

    const users = query
      ? await User.findAll({
          limit: 5,
          order: [['createdAt', 'DESC']],
        })
      : await User.findAll();
    // const users = await User.findAll({
    //   limit: 5,
    //   order: [['createdAt', 'DESC']],
    // });

    // const users = await User.findAll();

    // get some Users
    return res.status(200).json({
      users,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findByPk(req.params.userId);
    console.log(user);

    // get some Users
    return res.status(200).json({
      message: user,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, isAdmin } = req.body;
    const user: any = await User.findByPk(req.params.userId);
    user.email = email;
    user.password = password;
    user.isAdmin = isAdmin;
    await user.save();
    console.log(user);

    // get some Users
    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const removeUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      await user.destroy().then(function () {
        return res.status(200).json({
          message: 'User deleted.',
        });
      });
    } else {
      res.send({ message: 'user not exists' });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// adding a User
const addUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);

    const { email, password, isAdmin } = req.body;
    const id = uuidv4();
    const user = await User.create({
      id,
      email,
      password: hashPassword(password),
      isAdmin,
    });

    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }

  // return response
};

export default { getUsers, getUser, addUser, updateUser, removeUser };
// export default { getUsers, getUser, updateUser, deleteUser, addUser };
