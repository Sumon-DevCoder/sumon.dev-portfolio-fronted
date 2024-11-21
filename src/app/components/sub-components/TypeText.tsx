//importing typewriter-effect
import Typewriter from "typewriter-effect";

export default function TypeText() {
  return (
    <h1 className="my-name">
      <Typewriter
        options={{
          strings: ["Mustafizr Rahman Sumon", "MERN Stack Developer"],
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .changeDelay(50) // Adjust typing speed as needed
            .pauseFor(1000)
            .deleteAll()
            .typeString("Muhammad Saroar")
            .start();
        }}
      />
    </h1>
  );
}
