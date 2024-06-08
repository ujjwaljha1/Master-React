/**
 * this keyword
 * Refers to the object that is executing the function
 */

const user1 = {
  name: "Ujjwal Jha",
  showName: function () {
    console.log("here -", this.name);
    function showMessage() {
      console.log(this);
    }
    showMessage();
  },
};

user1.showName();
