import { parseBody } from "../../utils/index.js";

export const getAllIncentives = async (req, res) => {
    try {
          const body = parseBody(req.body);
    } catch (error) {
        throw error;
    }
};