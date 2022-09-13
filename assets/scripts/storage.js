export class Storage {
  get firstName() {
    return localStorage.getItem("first-name");
  }

  get playerName() {
    return localStorage.getItem("players-name");
  }

  get uniqueId() {
    return localStorage.getItem("unique-id");
  }

  get answer() {
    return localStorage.getItem("challengeAnswers");
  }

  set firstName(value) {
    localStorage.setItem("first-name", value);
    console.log("first-name set", value);
  }

  set playerName(value) {
    localStorage.setItem("players-name", value);
    console.log("players-name set", value);
  }

  set uniqueId(value) {
    localStorage.setItem("unique-Id", value);
    // console.log("players-name set", value);
  }
  set answer(value) {
    localStorage.setItem("challengeAnswers", value);
    console.log("challengeAnswers", value);
  }
}

export const storage = new Storage();
