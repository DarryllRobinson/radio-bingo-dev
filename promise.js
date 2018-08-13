ccccomponentDidMount() {
  this.mockOne()
    .then(this.mockTwo)
    .then(successMessage => {
      this.mockThree();
    });

    /*this.mockOne()
    .then(successMessage => {
      this.mockTwo()
      .then(successMessage => {
        this.mockThree()
        .then(successMessage => {
          this.mockFour()
        })
      })
    })*/
}

mockOne() {
  return new Promise((resolve, reject) => {
    console.log("mockOne");
    resolve();
  });
}

mockTwo() {
  return new Promise((resolve, reject) => {
    console.log("mockTwo");
    setTimeout(function() {
      resolve("Test success message");
    }, 2000);
  }).catch(err => console.log("There was an error in mockTwo:" + err));
}

mockThree() {
  return new Promise((resolve, reject) => {
    console.log("mockThree");
    resolve();
  });
}
