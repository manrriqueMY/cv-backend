export const success = (res, data) =>
  res.send({
    status: true,
    data,
  });

export const failed = (res, message) =>
  res.send({
    status: false,
    message,
  });
