import { parseBody } from "../../utils/index.js";

export const register_User = async (req, res) => {
  try {
    const body = parseBody(req.body);
  } catch (error) {
    throw error;
  }
};


export const login_User = async (req, res) => {
  try {
    const body = parseBody(req.body);

  } catch (error) {
    throw error;
  }
};



export const send_verification_code = async (req, res) => {
  try {
    const body = parseBody(req.body);

  } catch (error) {
    throw error;
  }
};
