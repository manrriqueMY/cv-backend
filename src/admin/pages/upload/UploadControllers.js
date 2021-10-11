import uploadFile from "../../../config/AwsS3";
import { failed, success } from "../../../config/Responses";

export const save = async (req, res) => {
  try {
    const { file } = req.body;
    const result = await uploadFile(file);
    return result.status
      ? success(res, result.data)
      : failed(res, result.message);
  } catch (error) {
    return failed(res, error);
  }
};
