'''
 +-+-+ +-+-+ +-+-+-+
     |v|i|l|i|j|
  +-+-+ +-+-+ +-+-+-+
 |C|C| |B|Y| |4|.|0|
 +-+-+ +-+-+ +-+-+-+
'''

define doctor = Character("", image = "character-b-fl") # kind = bubble
define nurse = Character("", image = "character-c-fl") # kind = bubble

label broken_arm:
    me "Now we will focus on greetings..."

    nurse "Good afternoon. How can I assist you today?"
    me "Hi, I'm me. I accidentally fell off my bike and I think I broke my arm. It's really painful."
    nurse "I'm sorry to hear that, me. Let's get you checked in. Have a seat over there, and I'll call a doctor to examine you."
    me "Thank you."

    "A few minutes later, the doctor arrives"

    doctor "Hello, I'm Dr. Johnson. What seems to be the problem?"
    me "Hi, Dr. Johnson. I fell off my bike and hurt my arm. It's swelling and I can't move it without it hurting a lot."
    doctor "I see. Let's have a look, shall we? Can you point to where it hurts the most?"
    me "It's right here, on the lower part of my forearm. I think it might be broken."
    doctor "Alright, I'm going to gently feel it and see if there are any obvious deformities. Does it hurt when I press here?"
    me "Yes, that's very tender."
    doctor "Based on these symptoms, it's likely that you do have a fracture. We will need to take an X-ray to confirm the extent of the injury."
    me "Okay, what will happen next?"
    doctor "I'll call the radiology department to schedule an X-ray for you. In the meantime, we'll provide you with some pain relief. After we get the X-ray results, we will discuss the treatment options for your broken arm."
    me "Thank you, Dr. Johnson. I appreciate your help."
    doctor "You're welcome, me. Our main priority is to ensure your comfort and effective treatment. I'll be back shortly with more information, okay?"
    me "Alright, I'll be here. Thank you again."
    doctor "It's my pleasure. I'll see you soon, me."

    "me waits for the X-ray and is then called back to the doctor's office"

    doctor "me, I've reviewed your X-ray, and it looks like you have a fracture on your forearm. It's not a very serious one, but it will require immobilization for a few weeks."
    me "Will I need a cast?"
    doctor "Yes, to ensure proper healing, I recommend we apply a cast. It will help stabilize your arm and prevent further damage. Is that alright with you?"
    me "Yes, that sounds fine. What do I need to do?"
    doctor "The nurse will get you set up with a cast. It will take some time to dry, so it will feel warm and heavy for a while. Try to keep it dry and avoid putting weight or excessive stress on it."
    me "Alright, I will be careful. How long will I need to wear the cast?"
    doctor "Typically, it takes around six weeks for a fracture like yours to heal properly. However, we will monitor your progress and adjust the duration as necessary. In about two weeks, we will schedule a follow-up to check how you're doing."
    me "I understand. Thank you so much, Dr. Johnson, for your help and explanation."
    doctor "You're welcome, me. Don't hesitate to reach out if you have any questions or concerns during your recovery. Take care and I'll see you in two weeks."
    me "I will, thank you again. Goodbye, Dr. Johnson."
    doctor "Goodbye, me. Get well soon."

    return


label deliver_baby:
    me "Now we will focus on greetings..."

    "I walked into the hospital, her face etched with a mixture of excitement and nervousness. She approached the reception desk, where a nurse greeted her with a smile."

    nurse "Good afternoon! How can I assist you today?"
    me "Hi, I'm me. I'm pregnant and I think I'm in labor. I need to deliver my baby."
    nurse "Congratulations, me! Let's get you checked in. Please fill out this form with your personal details, and then we'll take it from there."

    "I quickly filled out the form, her hands slightly trembling. Once she handed it back to the nurse, the nurse led her to a wheelchair."

    nurse "Alright, me. We're going to take you to the delivery room. Just relax and we'll get everything ready for you."
    me "Thank you. I can't believe this day is finally here."

    "The nurse wheeled me down the hallway towards the labor and delivery unit. Along the way, they passed other expectant mothers, some looking calm while others appeared to be in discomfort."

    me "I hope everything goes smoothly. I've been waiting for this moment for so long."
    nurse "I understand, me. We're here to support you, and our team is experienced in delivering babies. You're in good hands."

    "As they entered the delivery room, me saw a team of doctors and nurses bustling about, preparing the room for the impending birth."

    doctor "Hello. I'm Dr. Johnson, and I'll be taking care of you today. How are you feeling?"
    me "Hi, Dr. Johnson. I'm feeling a mix of excitement and nerves, but I'm ready to meet my little one."
    doctor "That's completely natural. We'll make sure to keep you as comfortable as possible. Let's check how far along you are and monitor your contractions."

    "The doctor and nurses helped me onto the delivery bed and began monitoring her vital signs. They strapped a fetal monitor around her belly and checked how dilated she was."

    nurse "Your contractions are getting stronger. You're doing great."
    me "Thank you. Is there anything I can do to make the contractions more manageable?"
    nurse "We can offer you pain relief options such as an epidural, if you'd like. It's completely up to you."
    me "I think I would like to have an epidural. I want to be as comfortable as possible during the delivery."
    nurse "Not a problem. I'll notify the anesthesiologist, and they will be here shortly to administer the epidural."

    "As the hours passed, the medical team continued to monitor me's progress. They reassured her and guided her through the stages of labor, offering support and encouragement."

    doctor "It's time to push. You're doing amazingly well. Just a few more pushes and you'll get to meet your baby."

    "I gripped my husband's hand tightly as she followed the doctor's instructions. After a final push, cries filled the room, and my exhaustion was replaced by pure joy."

    me "(tearfully) It's a precious baby girl! We did it!"
    doctor "Congratulations. You did an incredible job. Welcome to the world, little one."

    "The medical team quickly cleared and wrapped the baby before placing her gently in me's arms. The room filled with smiles, relief, and the sweet scent of new life."

    me "She's perfect. Thank you all so much."
    nurse "It's been our pleasure, me. We're here to support you and guide you through this journey of motherhood. Congratulations again!"

    "As I embraced her newborn daughter, she couldn't help but feel grateful for the care and support she had received during this life-changing moment."

    return