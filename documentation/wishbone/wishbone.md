# Alt Pong - BLOON PONG

## Overview

- [Link to Demo (requires Arduino Uno/Redboard for serial input)](https://wishbone.vercel.app/)
- [Link to code repo](https://github.com/cnakpil/wishbone)

### Ideation

### Proposal

After Gray and I brainstormed over 50 ideas, our biggest barrier was "how do you use a pair of shears that have such a innate way to use them (chomp chomp) to provide a game experience that doesn't buy into that initial idea of how shears work". Thus, we decided to go with making a sort of wishbone minigame where two players fight over the proverbial wishbone (it's the shears) to smash the button first.

**Partner:** Gray Assi

**My role:** Programmer

### Tools

- Wood
- Bolts
- Metal clasps
- Woodshop
- P5.js
- Arduino IDE
- SparkFun Redboard

### MVP

- [x] Write functioning wishbone game with three overall functions: 
  - [x] Reset game canvas.
  - [x] On left click, break left bone.
  - [x] On right click, break right bone.
- [x] Connect buttons of controller to the code via serial i/o.

### Stretch Goals

- [x] ADD JUICE - sound effects, some basic animation.
- [ ] Use the Teensy LC to run the code.
- [ ] Make refined protoboard instead of using a breadboard.
- [ ] Refine the game concept to be like musical chairs - when the music stops, smash that button/break the bone.

---

## Process

Frankly, this is a very simple game from the code standpoint. Once we settled on the concept, it was simple to pseudocode out. The hard part of this project was always going to be 1) the enclosure and 2) juicing it up.

P5.js is not the greatest game engine to work with as it lends itself better to drawing applications (imo) than running a game. However, I've gotten pretty proficient at passing basic mapped/binary data through serial to the boards. This project only needs two, maybe three pieces of binary data passed through. 

Once the base logic was written (it's a series of if statements checking serial input data), it was juice time.

Gray drew out three forms for the wishbone: whole, broken left, and broken right. I imported them, slapped them on the canvas, and attached the logic.

To be clear, I have no idea how to animate, nor am I an actual artist. Typography is significantly easier because fonts have a form already. All this to say, I find it extremely hard to ideate motion. So we went extremely basic and slapped a cosine rotation on the canvas to make the wishbone in its whole state bob back and forth madly.

The animation only shows when the game is actively listening for button presses. When a side is pressed, the animation stops and the canvas flips to show the winning side (the broken bone).

Then, onto juice!

Grabbed the Super Mario invincibility star soundtrack as it's a rather perfect "slightly frantic but overall cheerful" sort of arcade-y sound.

### Difficulties

Unfortunately, I was out of commission for most of the working period for this project with laryngitis + migraines. This meant that I wasn't able to help with the controller fabrication beyond stripping out the buttons from my last project. I wish this could have been different - I genuinely enjoy working in the shop! But c'est la vie. Next time, I'll see if I can do some more in-shop stuff than code or if we can make a lower tech game.

## TL; DR

1. Have improved p5.js skills to build basic game loop from scratch instead of by remixing a previously written piece of code.

2. I want to learn either Unity, Unreal Engine, or Godot. I want to learn how to use an actual game engine to create a game instead of writing everything from scratch.

3. Our controller was super janky, but functioned well as a proof of concept
   
4. Same goes for the game. Perfectly servicable, but has the potential to be more. Not the interaction, persay, but the game design and juicing.
