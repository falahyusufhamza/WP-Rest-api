class ResourceNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.data = {message} 
    this.status = 404
  }
}

module.exports ={
      ResourceNotFoundError
}