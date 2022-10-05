const app = Vue.createApp({
  data() {
    return {
      user1: false,
      user2: false,
      show: true,
      hide: false,
      userClassInput: "",
      userClassOutput: "",
      userInputColor: "",
      userOutputColor: "",
    };
  },
  methods: {
    userInput(event) {
      this.userClassInput = event.target.value;
    },
    showHideBtn() {
      this.show = !this.show;
      this.hide = !this.hide;
      console.log("show=", this.show);
      console.log("hide=", this.hide);
    },
    userOutput() {
      console.log("s");
      this.userClassOutput = this.userClassInput;
    },
    userSelect() {
      if (this.userClassOutput == "user1") {
        this.user1 = true;
      } else if (this.userClassOutput == "user2") {
        this.user2 = true;
      } else {
        this.user1 = false;
        this.user2 = false;
      }
    },
    inputColor(event) {
      this.userInputColor = event.target.value;
    },
    outputColor() {
      this.userOutputColor = this.userInputColor;
      console.log(this.userOutputColor);
    },
  },
});

app.mount("#assignment");
