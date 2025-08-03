const questionsData = {
  "ClinicalSkills1": [
    {
      "type": "mcq",
      "id": 1,
      "question": "When examining the conjunctiva for jaundice, what specific indicator should you look for?",
      "options": [
        "A) Reddened sclera indicating marijuana use",
        "B) Yellow discoloration of the conjunctival vessels",
        "C) Excessive tearing and discharge",
        "D) Pupillary constriction"
      ],
      "correct": 1,
      "explanation": "Jaundice appears as yellow discoloration in the conjunctiva, particularly visible in the conjunctival vessels."
    },
    {
      "type": "mcq",
      "id": 2,
      "question": "What is the normal core body temperature range maintained by the thermoregulatory center?",
      "options": [
        "A) 35.9°C - 34.4°C (96.6-99.3°F)",
        "B) 36.1°C - 37.2°C (97.0-99.0°F)",
        "C) 37.0°C - 38.0°C (98.6-100.4°F)",
        "D) 35.0°C - 36.0°C (95.0-96.8°F)"
      ],
      "correct": 0,
      "explanation": "The thermoregulatory center maintains body temperature within 35.9°C - 34.4°C (96.6-99.3°F)."
    },
    {
      "type": "mcq",
      "id": 3,
      "question": "During abdominal examination, why is the sequence changed to I.A.P.P instead of the usual I.P.P.A?",
      "options": [
        "A) To avoid patient discomfort",
        "B) Because palpation prior to auscultation might alter bowel sounds",
        "C) To detect hernias more effectively",
        "D) To examine the liver and spleen first"
      ],
      "correct": 1,
      "explanation": "Palpation is performed after auscultation because palpation prior to auscultation might alter bowel sounds."
    },
    {
      "type": "mcq",
      "id": 4,
      "question": "What does 'guarding' refer to in abdominal examination?",
      "options": [
        "A) Involuntary tightening of abdominal musculature in response to inflammation",
        "B) Patient voluntarily tightening abdominal walls during examination",
        "C) Protective positioning of hands over painful areas",
        "D) Resistance to deep palpation techniques"
      ],
      "correct": 0,
      "explanation": "Guarding refers to involuntary tightening of the abdominal musculature that occurs in response to inflammation."
    },
    {
      "type": "mcq",
      "id": 5,
      "question": "When using a pen torch to examine the cornea, what should you specifically check for?",
      "options": [
        "A) Pupillary reaction only",
        "B) Growths or follicles of xerophthalmia",
        "C) Color changes in the iris",
        "D) Tear production adequacy"
      ],
      "correct": 1,
      "explanation": "The pen torch is used to examine the cornea for growths or follicles of xerophthalmia (vitamin A deficiency)."
    },
    {
      "type": "mcq",
      "id": 6,
      "question": "What is the normal pulse rate range for a 5-10 year old child?",
      "options": [
        "A) 110-120 minutes",
        "B) 100 minutes",
        "C) 70 minutes",
        "D) 60-80 minutes"
      ],
      "correct": 2,
      "explanation": "For children aged 5-10 years, the normal pulse rate is approximately 70 minutes."
    },
    {
      "type": "mcq",
      "id": 7,
      "question": "Which thermometer type is specifically mentioned for taking bath water temperature?",
      "options": [
        "A) Clinical thermometer",
        "B) Electronic thermometer",
        "C) Bath thermometer",
        "D) Wall thermometer"
      ],
      "correct": 2,
      "explanation": "Bath thermometers are specifically designed to take the temperature of patient's bath water."
    },
    {
      "type": "mcq",
      "id": 8,
      "question": "What is a contraindication for using oral/mouth temperature taking?",
      "options": [
        "A) Patient age over 65 years",
        "B) Delirious patients",
        "C) Patients with hypertension",
        "D) Patients with diabetes"
      ],
      "correct": 1,
      "explanation": "Delirious patients are contraindicated for oral temperature taking due to safety concerns."
    },
    {
      "type": "mcq",
      "id": 9,
      "question": "During lymph node examination, what does a firm or hard consistency indicate?",
      "options": [
        "A) Normal lymph node",
        "B) Acute inflammation",
        "C) Malignant lymph nodes",
        "D) Viral infection"
      ],
      "correct": 2,
      "explanation": "Firm or hard consistency in lymph nodes indicates malignant lymph nodes."
    },
    {
      "type": "mcq",
      "id": 10,
      "question": "What is the normal blood pressure range mentioned ?",
      "options": [
        "A) 110/70 mmHg",
        "B) 120/80 mmHg",
        "C) 140/90 mmHg",
        "D) 130/85 mmHg"
      ],
      "correct": 1,
      "explanation": "120/80 mmHg is mentioned as the normal blood pressure range."
    },
    {
      "type": "mcq",
      "id": 11,
      "question": "When examining the nose, what should you use to examine for polyps and blockage?",
      "options": [
        "A) Pen torch only",
        "B) Otoscope",
        "C) Thumb of the hand to gently push the nose upward",
        "D) Stethoscope"
      ],
      "correct": 2,
      "explanation": "The thumb of the hand is used to gently push the nose upward to examine for polyps and other blockages."
    },
    {
      "type": "mcq",
      "id": 12,
      "question": "What does 'compliance' refer to in cardiovascular examination?",
      "options": [
        "A) Patient cooperation during examination",
        "B) The ability of arteries to contract and expand",
        "C) Heart rate regulation",
        "D) Blood pressure measurement accuracy"
      ],
      "correct": 1,
      "explanation": "Compliance refers to the ability of the arteries to contract and expand."
    },
    {
      "type": "mcq",
      "id": 13,
      "question": "For rectal temperature in adults, how long should the thermometer stay in place?",
      "options": [
        "A) 1-2 minutes",
        "B) 2-3 minutes",
        "C) 3-4 minutes",
        "D) At least 3 minutes"
      ],
      "correct": 3,
      "explanation": "For rectal temperature in adults, the thermometer should stay in place for at least 3 minutes."
    },
    {
      "type": "mcq",
      "id": 14,
      "question": "What is the normal respiratory rate for adults?",
      "options": [
        "A) 12 to 20 breaths/minute",
        "B) 16 to 30 breaths/minute",
        "C) 20 to 40 breaths/minute",
        "D) 10 to 16 breaths/minute"
      ],
      "correct": 0,
      "explanation": "The normal respiratory rate for adults is 12 to 20 breaths per minute."
    },
    {
      "type": "mcq",
      "id": 15,
      "question": "When examining the chest region, what position should the patient assume?",
      "options": [
        "A) Lying flat on back",
        "B) Supine or sitting position",
        "C) Standing upright",
        "D) Left lateral position"
      ],
      "correct": 1,
      "explanation": "Chest examination requires the patient to assume a supine or sitting position."
    },
    {
      "type": "mcq",
      "id": 16,
      "question": "What does systolic pressure represent?",
      "options": [
        "A) Pressure when heart is at rest",
        "B) Force noticed when heart muscle is at maximum contraction",
        "C) Average pressure in arteries",
        "D) Pressure in veins"
      ],
      "correct": 1,
      "explanation": "Systolic pressure is the force noticed when the heart muscle is at maximum contraction."
    },
    {
      "type": "mcq",
      "id": 17,
      "question": "Which artery sites are mentioned for pulse taking?",
      "options": [
        "A) Carotid, radial, and femoral only",
        "B) Carotid, radial, popliteal, dorsalis pedis, and apical",
        "C) Radial and carotid only",
        "D) Temporal and brachial only"
      ],
      "correct": 1,
      "explanation": "The text mentions carotid, radial, popliteal, dorsalis pedis, and apical artery sites for pulse taking."
    },
    {
      "type": "mcq",
      "id": 18,
      "question": "What is the formula to convert Fahrenheit to Celsius?",
      "options": [
        "A) C = (F - 32) × 5/9",
        "B) C = (F + 32) × 9/5",
        "C) C = F × 9/5 + 32",
        "D) C = (F - 32) × 9/5"
      ],
      "correct": 0,
      "explanation": "The formula to convert Fahrenheit to Celsius is C = (F - 32) × 5/9."
    },
    {
      "type": "mcq",
      "id": 19,
      "question": "When examining the ear, what should you check for in the external ear?",
      "options": [
        "A) Hearing acuity only",
        "B) Wax impaction, deformities, and intactness",
        "C) Balance function",
        "D) Nerve function"
      ],
      "correct": 1,
      "explanation": "When examining the external ear, check for wax impaction, deformities, and intactness."
    },
    {
      "type": "mcq",
      "id": 20,
      "question": "What is the normal pulse rate for newborns?",
      "options": [
        "A) 110-120 minutes",
        "B) 130-140 minutes",
        "C) 100 minutes",
        "D) 70 minutes"
      ],
      "correct": 1,
      "explanation": "The normal pulse rate for newborns is 130-140 minutes."
    },
    {
      "type": "mcq",
      "id": 21,
      "question": "What does 'peristalsis' refer to in abdominal examination?",
      "options": [
        "A) Abdominal muscle contraction",
        "B) Wave motion of vessels",
        "C) Liver function",
        "D) Kidney movement"
      ],
      "correct": 1,
      "explanation": "Peristalsis refers to the wave motion of vessels in the abdomen."
    },
    {
      "type": "mcq",
      "id": 22,
      "question": "When should oral temperature NOT be taken?",
      "options": [
        "A) After hot or cold drinks",
        "B) In elderly patients",
        "C) During fever",
        "D) In conscious patients"
      ],
      "correct": 0,
      "explanation": "Oral temperature should not be taken immediately after the patient has had hot or cold drinks or food."
    },
    {
      "type": "mcq",
      "id": 23,
      "question": "What is the characteristic of abnormal pulse?",
      "options": [
        "A) Regular rhythm and volume",
        "B) Irregularity in speed and volume of heartbeat",
        "C) Consistent rate throughout",
        "D) Normal variations with breathing"
      ],
      "correct": 1,
      "explanation": "Abnormal pulse is characterized by irregularity in the speed and volume of heartbeat."
    },
    {
      "type": "mcq",
      "id": 24,
      "question": "What equipment is needed for pulse taking?",
      "options": [
        "A) Stethoscope only",
        "B) Second-handed watch or pulse meter and patient temperature chart",
        "C) Blood pressure cuff",
        "D) Thermometer"
      ],
      "correct": 1,
      "explanation": "Equipment needed for pulse taking includes a second-handed watch or pulse meter and patient temperature chart."
    },
    {
      "type": "mcq",
      "id": 25,
      "question": "What is the purpose of using vaseline in temperature taking equipment?",
      "options": [
        "A) To sterilize the thermometer",
        "B) For lubrication during insertion",
        "C) To prevent breakage",
        "D) To improve accuracy"
      ],
      "correct": 1,
      "explanation": "Vaseline is used for lubrication during thermometer insertion, particularly for rectal temperature."
    },
    {
      "type": "mcq",
      "id": 26,
      "question": "What does diastolic pressure represent?",
      "options": [
        "A) Maximum heart contraction pressure",
        "B) Pressure when heart is at rest between beats",
        "C) Average arterial pressure",
        "D) Venous return pressure"
      ],
      "correct": 1,
      "explanation": "Diastolic pressure is the pressure when the heart is at rest between beats."
    },
    {
      "type": "mcq",
      "id": 27,
      "question": "What is the normal temperature range for a person at rest?",
      "options": [
        "A) 35°C or 95°F",
        "B) 36°C or 98°F",
        "C) 37°C or 98.6°F",
        "D) 38°C or 100.4°F"
      ],
      "correct": 1,
      "explanation": "The normal temperature for a person at rest is 36°C or 98°F."
    },
    {
      "type": "mcq",
      "id": 28,
      "question": "What should you observe during abdominal inspection?",
      "options": [
        "A) Only the shape of abdomen",
        "B) General contour, scaphoid/flat/concave structure, and areas of distension",
        "C) Just the skin color",
        "D) Only surgical scars"
      ],
      "correct": 1,
      "explanation": "During abdominal inspection, observe the general contour, scaphoid/flat/concave structure, and areas of distension."
    },
    {
      "type": "mcq",
      "id": 29,
      "question": "What is the relationship between pulse and respiration rate?",
      "options": [
        "A) 2:1 ratio",
        "B) 3:1 ratio",
        "C) 4:1 ratio",
        "D) 5:1 ratio"
      ],
      "correct": 2,
      "explanation": "The rate of pulse to respiration is usually fairly constant at about 4:1 ratio."
    },
    {
      "type": "mcq",
      "id": 30,
      "question": "What does 'splenomegaly' refer to in abdominal examination?",
      "options": [
        "A) Liver enlargement",
        "B) Spleen enlargement",
        "C) Kidney enlargement",
        "D) Pancreatic enlargement"
      ],
      "correct": 1,
      "explanation": "Splenomegaly refers to enlargement of the spleen, which can be detected during abdominal examination."
    },
    {
      "type": "mcq",
      "id": 31,
      "question": "According to WHO guidelines, what is the minimum time required for effective hand washing?",
      "options": [
        "10-15 seconds",
        "20-30 seconds",
        "30-45 seconds",
        "45-60 seconds"
      ],
      "correct": 1,
      "explanation": "The WHO recommends at least 20-30 seconds for proper hand washing to ensure maximum effectiveness."
    },
    {
      "type": "mcq",
      "id": 32,
      "question": "What percentage reduction in diarrhea incidence can proper hand washing achieve?",
      "options": [
        "Up to 25%",
        "Up to 40%",
        "Up to 55%",
        "Up to 70%"
      ],
      "correct": 1,
      "explanation": "Proper hand washing with soap can reduce the incidence of diarrhea by up to 40%."
    },
    {
      "type": "mcq",
      "id": 33,
      "question": "What does SpO2 measure in pulse oximetry?",
      "options": [
        "Heart rate variability",
        "Blood pressure",
        "Oxygen saturation in blood",
        "Carbon dioxide levels"
      ],
      "correct": 2,
      "explanation": "SpO2 measures the oxygen saturation level in the blood, indicating respiratory and cardiovascular health."
    },
    {
      "type": "mcq",
      "id": 34,
      "question": "What is the normal range for SpO2 levels?",
      "options": [
        "85-90%",
        "90-95%",
        "95-100%",
        "100-105%"
      ],
      "correct": 2,
      "explanation": "Normal SpO2 levels are typically between 95-100%."
    },
    {
      "type": "mcq",
      "id": 35,
      "question": "Which type of pulse oximeter is most commonly used in home settings?",
      "options": [
        "Handheld pulse oximeters",
        "Fingertip pulse oximeters",
        "Wrist-worn pulse oximeters",
        "Hospital-grade pulse oximeters"
      ],
      "correct": 1,
      "explanation": "Fingertip pulse oximeters are portable, battery-operated devices commonly used at home."
    },
    {
      "type": "mcq",
      "id": 36,
      "question": "What is the primary goal of aseptic technique?",
      "options": [
        "To achieve complete sterility",
        "To eliminate infection, not achieve sterility",
        "To reduce bacterial count",
        "To sterilize all equipment"
      ],
      "correct": 1,
      "explanation": "The goal of asepsis is to eliminate infection, not necessarily to achieve complete sterility."
    },
    {
      "type": "mcq",
      "id": 37,
      "question": "At what temperature should items be exposed in a dry hot air oven for sterilization?",
      "options": [
        "120°C for 2 hours",
        "140°C for 1.5 hours",
        "160°C for 1 hour",
        "180°C for 30 minutes"
      ],
      "correct": 2,
      "explanation": "Items should be exposed to 160°C for one hour in a dry hot air oven for proper sterilization."
    },
    {
      "type": "mcq",
      "id": 38,
      "question": "What should be done before attaching a pulse oximeter sensor?",
      "options": [
        "Warm the finger",
        "Clean the sensor if necessary",
        "Apply moisturizer",
        "Massage the finger"
      ],
      "correct": 1,
      "explanation": "The sensor should be cleaned if necessary before attachment to ensure accurate readings."
    },
    {
      "type": "mcq",
      "id": 39,
      "question": "Which hand washing step involves interlacing fingers?",
      "options": [
        "Step 3",
        "Step 4",
        "Step 5",
        "Step 6"
      ],
      "correct": 2,
      "explanation": "Step 5 involves palm to palm with fingers interlaced to clean between fingers thoroughly."
    },
    {
      "type": "mcq",
      "id": 40,
      "question": "What is the main advantage of wrist-worn pulse oximeters?",
      "options": [
        "More accurate readings",
        "Continuous monitoring during sleep",
        "Lower cost",
        "Easier to use"
      ],
      "correct": 1,
      "explanation": "Wrist-worn pulse oximeters are designed for continuous monitoring, especially during sleep."
    },
    {
      "type": "mcq",
      "id": 41,
      "question": "Which sterilization method is suitable for sharp-edged instruments?",
      "options": [
        "Boiling",
        "Dry hot air oven",
        "Chemical sterilization",
        "Radiation"
      ],
      "correct": 1,
      "explanation": "Dry hot air oven method is suitable for sharp-edged instruments as it doesn't damage them."
    },
    {
      "type": "mcq",
      "id": 42,
      "question": "What happens if you move during pulse oximeter measurement?",
      "options": [
        "Reading becomes more accurate",
        "Movement can affect accuracy",
        "No effect on reading",
        "Device stops working"
      ],
      "correct": 1,
      "explanation": "Movement can affect the accuracy of readings, so patients should remain still during measurement."
    },
    {
      "type": "mcq",
      "id": 43,
      "question": "Hand washing helps prevent which of the following respiratory infections?",
      "options": [
        "Only common cold",
        "Only influenza",
        "Common cold, influenza, and COVID-19",
        "Only COVID-19"
      ],
      "correct": 2,
      "explanation": "Hand washing helps prevent various respiratory infections including colds, influenza, and COVID-19."
    },
    {
      "type": "mcq",
      "id": 44,
      "question": "What is the no-touch technique in aseptic practice?",
      "options": [
        "Never touching any equipment",
        "Maintaining sterility without direct contact",
        "Using only gloves",
        "Avoiding patient contact"
      ],
      "correct": 1,
      "explanation": "No-touch technique ensures sterility by avoiding direct contact with sterile items and maintaining sterile fields."
    },
    {
      "type": "mcq",
      "id": 45,
      "question": "Which disinfectant is mentioned for instrument sterilization?",
      "options": [
        "Alcohol only",
        "Glutaraldehyde (CidexTM)",
        "Bleach solution",
        "Hydrogen peroxide only"
      ],
      "correct": 1,
      "explanation": "Glutaraldehyde (CidexTM) is specifically mentioned as a chemical disinfectant for instruments."
    },
    {
      "type": "mcq",
      "id": 46,
      "question": "What should be avoided when using pulse oximeters?",
      "options": [
        "Clean fingers",
        "Nail polish or artificial nails",
        "Dry skin",
        "Room temperature"
      ],
      "correct": 1,
      "explanation": "Nail polish or artificial nails should be removed as they can interfere with readings."
    },
    {
      "type": "mcq",
      "id": 47,
      "question": "How long should items be boiled for sterilization?",
      "options": [
        "10 minutes",
        "15 minutes",
        "20 minutes",
        "25 minutes"
      ],
      "correct": 2,
      "explanation": "Items should be boiled for 20 minutes for proper sterilization."
    },
    {
      "type": "mcq",
      "id": 48,
      "question": "What is the main benefit of proper hand washing in healthcare settings?",
      "options": [
        "Reduces healthcare costs",
        "Prevents spread of infections",
        "Improves staff morale",
        "Saves time"
      ],
      "correct": 1,
      "explanation": "The main benefit is preventing the spread of infections, which also contributes to reducing healthcare costs."
    },
    {
      "type": "mcq",
      "id": 49,
      "question": "Which populations are most vulnerable and benefit from community hand washing practices?",
      "options": [
        "Adults only",
        "Healthcare workers",
        "Elderly, young children, and immunocompromised",
        "Athletes"
      ],
      "correct": 2,
      "explanation": "Elderly, young children, and those with compromised immune systems are most vulnerable populations."
    },
    {
      "type": "mcq",
      "id": 50,
      "question": "What type of towel should be used after hand washing?",
      "options": [
        "Reusable cloth towel",
        "Single-use towel",
        "Air drying only",
        "Paper napkin"
      ],
      "correct": 1,
      "explanation": "A single-use towel should be used to avoid re-contamination of clean hands."
    },
    {
      "type": "mcq",
      "id": 51,
      "question": "In aseptic technique, what does 'sterile field' refer to?",
      "options": [
        "Hospital operating room",
        "Area free of all microorganisms",
        "Surgical instrument tray",
        "Patient's body"
      ],
      "correct": 1,
      "explanation": "A sterile field is a designated area that is free of all microorganisms and must be maintained during procedures."
    },
    {
      "type": "mcq",
      "id": 52,
      "question": "What is the primary use of pulse oximeters in sleep medicine?",
      "options": [
        "Monitoring heart rate",
        "Detecting sleep apnea",
        "Measuring blood pressure",
        "Recording brain waves"
      ],
      "correct": 1,
      "explanation": "Pulse oximeters are used to detect sleep apnea by monitoring oxygen level drops during sleep."
    },
    {
      "type": "mcq",
      "id": 53,
      "question": "Which step in hand washing focuses on cleaning fingertips and nails?",
      "options": [
        "Step 6",
        "Step 7",
        "Step 8",
        "Step 9"
      ],
      "correct": 2,
      "explanation": "Step 8 involves rotational rubbing to clean fingertips and nails thoroughly."
    },
    {
      "type": "mcq",
      "id": 54,
      "question": "What is the advantage of hospital-grade pulse oximeters over home devices?",
      "options": [
        "Lower cost",
        "Continuous monitoring and advanced features",
        "Easier to use",
        "Smaller size"
      ],
      "correct": 1,
      "explanation": "Hospital-grade devices offer continuous monitoring and additional features like alarms and data recording."
    },
    {
      "type": "mcq",
      "id": 55,
      "question": "Which method of sterilization uses direct sunlight?",
      "options": [
        "Physical sterilization",
        "Chemical sterilization",
        "Radiation sterilization",
        "Autoclave sterilization"
      ],
      "correct": 2,
      "explanation": "Radiation sterilization includes direct sunlight, which can kill many microorganisms including tuberculosis bacilli."
    },
    {
      "type": "mcq",
      "id": 56,
      "question": "What should be done with sterile items after autoclaving?",
      "options": [
        "Use immediately",
        "Store in any container",
        "Handle with sterile forceps",
        "Air dry completely"
      ],
      "correct": 2,
      "explanation": "Sterile items must be handled with sterile forceps to avoid contamination after autoclaving."
    },
    {
      "type": "mcq",
      "id": 57,
      "question": "How should the pulse oximeter fit on the finger?",
      "options": [
        "Very tightly",
        "Loosely",
        "Snugly but not too tightly",
        "It doesn't matter"
      ],
      "correct": 2,
      "explanation": "The device should fit snugly but not too tightly to ensure accurate readings without restricting blood flow."
    },
    {
      "type": "mcq",
      "id": 58,
      "question": "What is the role of the scrub nurse in maintaining aseptic technique?",
      "options": [
        "Perform surgery",
        "Set up and maintain sterile field",
        "Administer medication",
        "Monitor vital signs"
      ],
      "correct": 1,
      "explanation": "The scrub nurse or surgical technologist is responsible for setting up and maintaining the sterile field."
    },
    {
      "type": "mcq",
      "id": 59,
      "question": "Which condition makes pulse oximetry particularly important for monitoring?",
      "options": [
        "Diabetes",
        "Hypertension",
        "COPD and asthma",
        "Kidney disease"
      ],
      "correct": 2,
      "explanation": "Pulse oximetry is crucial for patients with chronic respiratory conditions like COPD and asthma."
    },
    {
      "type": "mcq",
      "id": 60,
      "question": "What is the correct way to turn off a faucet after hand washing?",
      "options": [
        "With clean hands",
        "Using the towel",
        "With elbow",
        "Using foot pedal if available"
      ],
      "correct": 1,
      "explanation": "The towel should be used to turn off the faucet to avoid re-contaminating clean hands."
    },
    {
      "type": "mcq",
      "id": 61,
      "question": "In cold sterilization, what is the purpose of refrigeration?",
      "options": [
        "Kill all microorganisms",
        "Slow microbial growth",
        "Preserve vaccines and food",
        "Sterilize instruments"
      ],
      "correct": 2,
      "explanation": "Refrigeration is used for preservation of vaccines and food, not for sterilization of instruments."
    },
    {
      "type": "mcq",
      "id": 62,
      "question": "What should be monitored during anesthesia and post-surgical care?",
      "options": [
        "Only heart rate",
        "Only blood pressure",
        "Oxygen saturation levels",
        "Only temperature"
      ],
      "correct": 2,
      "explanation": "Oxygen saturation monitoring ensures patients receive adequate oxygen during anesthesia and recovery."
    },
    {
      "type": "mcq",
      "id": 63,
      "question": "Which hand washing technique involves backs of fingers to opposing palms?",
      "options": [
        "Step 4",
        "Step 5",
        "Step 6",
        "Step 7"
      ],
      "correct": 2,
      "explanation": "Step 6 involves backs of fingers to opposing palms with fingers interlaced."
    },
    {
      "type": "mcq",
      "id": 64,
      "question": "What is hypoxemia in relation to pulse oximetry?",
      "options": [
        "High oxygen levels",
        "Low blood oxygen levels",
        "Normal oxygen levels",
        "Unstable oxygen levels"
      ],
      "correct": 1,
      "explanation": "Hypoxemia refers to low blood oxygen levels, which pulse oximeters help detect early."
    },
    {
      "type": "mcq",
      "id": 65,
      "question": "Which barrier is used to protect patients during aseptic procedures?",
      "options": [
        "Sterile gloves only",
        "Sterile gloves and gowns",
        "Masks only",
        "Hand washing only"
      ],
      "correct": 1,
      "explanation": "Sterile gloves and gowns are essential barriers to protect patients from pathogen transfer."
    },
    {
      "type": "mcq",
      "id": 66,
      "question": "What is the main difference between medical and surgical asepsis?",
      "options": [
        "No difference",
        "Medical reduces organisms, surgical eliminates them",
        "Medical is for hospitals only",
        "Surgical is easier to perform"
      ],
      "correct": 1,
      "explanation": "Medical asepsis reduces microorganisms, while surgical asepsis eliminates them from specific areas."
    },
    {
      "type": "mcq",
      "id": 67,
      "question": "How should disposable pulse oximeter sensors be handled?",
      "options": [
        "Reuse after cleaning",
        "Discard after single use",
        "Share between patients",
        "Sterilize between uses"
      ],
      "correct": 1,
      "explanation": "Disposable sensors should be discarded after single use to prevent cross-contamination."
    },
    {
      "type": "mcq",
      "id": 68,
      "question": "What is the purpose of using antiseptic solutions in hand washing?",
      "options": [
        "Moisturize hands",
        "Remove dirt only",
        "Kill remaining microorganisms",
        "Improve skin texture"
      ],
      "correct": 2,
      "explanation": "Antiseptic solutions help kill remaining microorganisms after mechanical cleaning."
    },
    {
      "type": "mcq",
      "id": 69,
      "question": "Which technique ensures sterile items remain sterile during procedures?",
      "options": [
        "Clean technique",
        "No-touch technique",
        "Minimal contact technique",
        "Standard precautions"
      ],
      "correct": 1,
      "explanation": "No-touch technique ensures sterile items remain sterile by avoiding direct contact."
    },
    {
      "type": "mcq",
      "id": 70,
      "question": "What is the primary indicator of respiratory and cardiovascular health in pulse oximetry?",
      "options": [
        "Heart rate",
        "Blood pressure",
        "Oxygen saturation (SpO2)",
        "Body temperature"
      ],
      "correct": 2,
      "explanation": "Oxygen saturation (SpO2) is the primary indicator of respiratory and cardiovascular health."
    },
    {
      "type": "fill-in-the-blank",
      "id": 71,
      "question": "The normal range for SpO2 levels is _______ to _______.",
      "answer": "95% to 100%"
    },
    {
      "type": "fill-in-the-blank",
      "id": 72,
      "question": "Hand washing should be performed for at least _______ seconds according to WHO guidelines.",
      "answer": "20-30 seconds"
    },
    {
      "type": "fill-in-the-blank",
      "id": 73,
      "question": "The chemical disinfectant _______ is commonly used for instrument sterilization.",
      "answer": "Glutaraldehyde (CidexTM)"
    },
    {
      "type": "fill-in-the-blank",
      "id": 74,
      "question": "Dry hot air oven sterilization requires exposure to _______°C for _______ hour(s).",
      "answer": "160°C for 1 hour"
    },
    {
      "type": "fill-in-the-blank",
      "id": 75,
      "question": "The goal of asepsis is to _______ infection, not to achieve _______.",
      "answer": "eliminate infection, not to achieve sterility"
    },
    {
      "type": "fill-in-the-blank",
      "id": 76,
      "question": "Pulse oximeters measure _______ saturation in the blood.",
      "answer": "oxygen"
    },
    {
      "type": "fill-in-the-blank",
      "id": 77,
      "question": "_______ pulse oximeters are commonly used in home settings.",
      "answer": "Fingertip"
    },
    {
      "type": "fill-in-the-blank",
      "id": 78,
      "question": "Proper hand washing can reduce diarrhea incidence by up to _______.",
      "answer": "40%"
    },
    {
      "type": "fill-in-the-blank",
      "id": 79,
      "question": "The _______ technique ensures that sterile items remain sterile during procedures.",
      "answer": "no-touch"
    },
    {
      "type": "fill-in-the-blank",
      "id": 80,
      "question": "Items should be boiled for _______ minutes for proper sterilization.",
      "answer": "20"
    },
    {
      "type": "fill-in-the-blank",
      "id": 81,
      "question": "A _______ towel should be used after hand washing to avoid re-contamination.",
      "answer": "single-use"
    },
    {
      "type": "fill-in-the-blank",
      "id": 82,
      "question": "The _______ nurse is responsible for setting up and maintaining the sterile field.",
      "answer": "scrub"
    },
    {
      "type": "fill-in-the-blank",
      "id": 83,
      "question": "_______ refers to low blood oxygen levels that pulse oximeters help detect.",
      "answer": "Hypoxemia"
    },
    {
      "type": "fill-in-the-blank",
      "id": 84,
      "question": "Pulse oximeters are particularly important for monitoring patients with _______ and _______.",
      "answer": "COPD and asthma"
    },
    {
      "type": "fill-in-the-blank",
      "id": 85,
      "question": "_______ can affect the accuracy of pulse oximeter readings.",
      "answer": "Movement"
    },
    {
      "type": "fill-in-the-blank",
      "id": 86,
      "question": "The vulnerable populations that benefit most from hand washing include _______, _______, and _______.",
      "answer": "elderly, young children, and immunocompromised individuals"
    },
    {
      "type": "fill-in-the-blank",
      "id": 87,
      "question": "_______ sterilization uses direct sunlight to kill microorganisms.",
      "answer": "Radiation"
    },
    {
      "type": "fill-in-the-blank",
      "id": 88,
      "question": "Step _______ in hand washing involves rotational rubbing to clean fingertips and nails.",
      "answer": "8"
    },
    {
      "type": "fill-in-the-blank",
      "id": 89,
      "question": "The pulse oximeter should fit _______ but not too _______ on the finger.",
      "answer": "snugly but not too tightly"
    },
    {
      "type": "fill-in-the-blank",
      "id": 90,
      "question": "_______ asepsis reduces microorganisms while _______ asepsis eliminates them.",
      "answer": "Medical asepsis reduces microorganisms while surgical asepsis eliminates them"
    },
    {
      "type": "fill-in-the-blank",
      "id": 91,
      "question": "The ability of the arteries to _ and expand is called _. The pulse rate is expressed in _ per minute, and the volume of blood pumped into the arteries by the heart is the _ output.",
      "blanks": [
        "contract",
        "compliance",
        "beats",
        "cardiac"
      ],
      "explanation": "This relates to cardiovascular physiology and pulse characteristics."
    },
    {
      "type": "fill-in-the-blank",
      "id": 92,
      "question": "During abdominal examination, the sequence is changed to I.A.P.P instead of I.P.P.A because _ prior to auscultation might alter _. The patient should be in _ position with arms at sides.",
      "blanks": [
        "palpation",
        "bowel sounds",
        "supine"
      ],
      "explanation": "This explains the modified examination sequence for abdominal assessment."
    },
    {
      "type": "fill-in-the-blank",
      "id": 93,
      "question": "The normal core body temperature is maintained within a range of _ to _ (96.6-99.3°F) by the _. Surface temperature refers to the temperature of the _, subcutaneous tissue, and fat.",
      "blanks": [
        "35.9°C",
        "34.4°C",
        "thermoregulatory center",
        "skin"
      ],
      "explanation": "This covers body temperature regulation and measurement sites."
    },
    {
      "type": "fill-in-the-blank",
      "id": 94,
      "question": "When examining the conjunctiva, look for _ which may indicate jaundice, and check for _ sclera which may indicate marijuana use. The conjunctiva should be examined for _.",
      "blanks": [
        "yellow discoloration",
        "reddened",
        "abnormalities"
      ],
      "explanation": "This relates to eye examination techniques and findings."
    },
    {
      "type": "fill-in-the-blank",
      "id": 95,
      "question": "Lymph nodes that feel _ or hard indicate malignant lymph nodes, while _ consistency indicates normal lymph nodes. Always check for _, swelling, and tenderness.",
      "blanks": [
        "firm",
        "soft",
        "enlargement"
      ],
      "explanation": "This covers lymph node examination and interpretation of findings."
    },
    {
      "type": "fill-in-the-blank",
      "id": 96,
      "question": "The normal pulse rate for newborns is _ minutes, for adults it's _ minutes, and for old age it tends to be _. The pulse to respiration ratio is usually _.",
      "blanks": [
        "130-140",
        "60-80",
        "lower",
        "4:1"
      ],
      "explanation": "This covers age-related variations in pulse rates and physiological relationships."
    },
    {
      "type": "fill-in-the-blank",
      "id": 97,
      "question": "For rectal temperature in adults, the thermometer should stay in place for at least _ minutes. The patient should lie in _ position, and the thermometer should be inserted _ inches into the rectum.",
      "blanks": [
        "3",
        "left lateral",
        "two"
      ],
      "explanation": "This details the procedure for rectal temperature measurement."
    },
    {
      "type": "fill-in-the-blank",
      "id": 98,
      "question": "Blood pressure is measured in _ using a _ and stethoscope. The _ pressure is the force when the heart muscle is at maximum contraction, while _ pressure occurs when the heart is at rest.",
      "blanks": [
        "mmHg",
        "sphygmomanometer",
        "systolic",
        "diastolic"
      ],
      "explanation": "This covers blood pressure measurement and interpretation."
    },
    {
      "type": "fill-in-the-blank",
      "id": 99,
      "question": "When examining the nose, use the _ to gently push the nose upward to examine for _ and other blockages. Also check for _ of the skin, swelling, and tenderness.",
      "blanks": [
        "thumb",
        "polyps",
        "discoloration"
      ],
      "explanation": "This describes the technique for nasal examination."
    },
    {
      "type": "fill-in-the-blank",
      "id": 100,
      "question": "_ refers to involuntary tightening of the abdominal musculature in response to inflammation, while _ is the objective experience of pain from palpation. Always observe the patient's _ during palpation for signs of discomfort.",
      "blanks": [
        "Guarding",
        "tenderness",
        "face"
      ],
      "explanation": "This covers important concepts in abdominal examination and patient assessment."
    },
    {
      "type": "fill-in-the-blank",
      "id": 101,
      "question": "The normal temperature for a person at rest is _ to _ (96.6-98.6°F). The temperature can be measured using a thermometer placed in the _ or _.",
      "blanks": [
        "36°C",
        "37°C",
        "mouth",
        "rectum"
      ],
      "explanation": "This covers normal body temperature ranges and measurement sites."
    },
    {
      "type": "fill-in-the-blank",
      "id": 102,
      "question": "The _ pulse is felt on the wrist, while the _ pulse is felt on the neck. The pulse should be checked for _ and rhythm.",
      "blanks": [
        "radial",
        "carotid",
        "strength"
      ],
      "explanation": "This relates to pulse examination techniques and characteristics."
    }
  ],
  "Immunity mcq": [
    {
      "type": "mcq",
      "id": 1,
      "question": "DOTS stands for:",
      "options": [
        "Direct Observation Treatment Short-course",
        "Daily Observation Treatment System",
        "Direct Oral Treatment Schedule",
        "Daily Oral Treatment Short-course"
      ],
      "correct": 0
    },
    {
      "type": "mcq",
      "id": 2,
      "question": "How many types of polio viruses cause poliomyelitis?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 3,
      "question": "What percentage of polio infections cause irreversible paralysis?",
      "options": [
        "1 in every 100",
        "1 in every 150",
        "1 in every 200",
        "1 in every 250"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 4,
      "question": "OPV is given at which ages?",
      "options": [
        "Birth, 6 weeks, 10 weeks",
        "Birth, 6 weeks, 10 weeks, 14 weeks",
        "6 weeks, 10 weeks, 14 weeks",
        "Birth, 2 weeks, 6 weeks, 10 weeks"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 5,
      "question": "IPV stands for:",
      "options": [
        "Inactivated Polio Vaccine",
        "Injectable Polio Vaccine",
        "Immediate Polio Vaccine",
        "Immune Polio Vaccine"
      ],
      "correct": 0
    },
    {
      "type": "mcq",
      "id": 6,
      "question": "What does AEFI stand for?",
      "options": [
        "A) Adverse Event Following Infection",
        "B) Adverse Event Following Immunization",
        "C) Active Event Following Immunization",
        "D) Advanced Event Following Injection"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 7,
      "question": "What is the recommended storage temperature for vaccines?",
      "options": [
        "A) 0°C to 5°C",
        "B) 2°C to 8°C",
        "C) 1°C to 6°C",
        "D) 3°C to 9°C"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 8,
      "question": "What is the volume of auto disposable syringe used for BCG vaccination?",
      "options": [
        "A) 0.5ml",
        "B) 1ml",
        "C) 0.05ml",
        "D) 2ml"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 9,
      "question": "Where is the BCG vaccination given?",
      "options": [
        "A) Upper right arm",
        "B) Upper left arm",
        "C) Thigh",
        "D) Buttocks"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 10,
      "question": "What is the needle size used for babies?",
      "options": [
        "A) 21g",
        "B) 23g",
        "C) 25g",
        "D) 27g"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 11,
      "question": "What is the needle size used for adults?",
      "options": [
        "A) 19g",
        "B) 21g",
        "C) 23g",
        "D) 25g"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 12,
      "question": "What is the green colored part of the needle called?",
      "options": [
        "A) Shaft",
        "B) Plunger seal",
        "C) Adapter",
        "D) Barrel"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 13,
      "question": "What should you do if a vaccine vial breaks during freeze watch?",
      "options": [
        "A) Use it immediately",
        "B) Discard it",
        "C) Store it separately",
        "D) Report to supervisor"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 14,
      "question": "How many stages are there in Vaccine Vial Monitor (VVM)?",
      "options": [
        "A) 3 stages",
        "B) 4 stages",
        "C) 5 stages",
        "D) 6 stages"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "question": "Which VVM stages indicate vaccines that can be used?",
      "options": [
        "A) Stage 1 & 2",
        "B) Stage 2 & 3",
        "C) Stage 3 & 4",
        "D) All stages"
      ],
      "id": 15,
      "correct": 0
    },
    {
      "type": "mcq",
      "id": 16,
      "question": "What is the main purpose of cold chain system?",
      "options": [
        "A) To transport vaccines quickly",
        "B) To maintain vaccine potency from manufacturer to vaccination site",
        "C) To store vaccines permanently",
        "D) To reduce vaccine costs"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 17,
      "question": "What does CCO stand for?",
      "options": [
        "A) Cold Chain Officer",
        "B) Central Coordination Officer",
        "C) Community Care Officer",
        "D) Clinical Care Officer"
      ],
      "correct": 0
    },
    {
      "type": "mcq",
      "id": 18,
      "question": "What is the first level in the cold chain system hierarchy?",
      "options": [
        "A) National Cold Chain Store",
        "B) Manufacturer",
        "C) Zonal Store",
        "D) Airport"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 19,
      "question": "What comes after the manufacturer in the cold chain system?",
      "options": [
        "A) Zonal Store",
        "B) State Cold Chain Store",
        "C) Transit to the Airport",
        "D) Health Facility"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 20,
      "question": "Which vaccine can be tested using the shake test?",
      "options": [
        "A) BCG",
        "B) Pentavalent",
        "C) Polio",
        "D) Yellow fever"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 21,
      "question": "What is the volume of reconstitution for BCG?",
      "options": [
        "A) 0.5ml",
        "B) 1ml",
        "C) 2ml",
        "D) 5ml"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 22,
      "question": "What type of container is a cold box?",
      "options": [
        "A) Refrigerated container",
        "B) Insulated container lined with frozen ice pack",
        "C) Metal container",
        "D) Plastic container"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 23,
      "question": "What are vaccine carriers used for?",
      "options": [
        "A) Long-term storage",
        "B) Manufacturing vaccines",
        "C) Transporting vaccines to outreach sites",
        "D) Testing vaccines"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 24,
      "question": "Which of these is NOT a challenge of immunization coverage?",
      "options": [
        "A) Distance of health facility",
        "B) Lack of vaccine supply",
        "C) High vaccine costs",
        "D) Fear of side effects"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 25,
      "question": "What should be done during a freeze watch test?",
      "options": [
        "A) Heat the vaccine",
        "B) Shake the vial vigorously",
        "C) Conduct shake test if possible",
        "D) Store at room temperature"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 26,
      "question": "What is sterilization?",
      "options": [
        "A) Cleaning with soap",
        "B) Elimination of all microorganisms including spores",
        "C) Washing with water",
        "D) Air drying"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 27,
      "question": "How long should you boil instruments for sterilization?",
      "options": [
        "A) 10 minutes",
        "B) 15 minutes",
        "C) 20 minutes",
        "D) 30 minutes"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 28,
      "question": "What is disinfection?",
      "options": [
        "A) Complete elimination of all organisms",
        "B) Killing of many microorganisms but not spores",
        "C) Washing with soap",
        "D) Steaming process"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 29,
      "question": "What should you check before opening a vaccine vial?",
      "options": [
        "A) Expiry date only",
        "B) VVM only",
        "C) Both VVM and expiry date",
        "D) Manufacturing date"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 30,
      "question": "What is the purpose of vaccine carriers?",
      "options": [
        "A) Permanent storage",
        "B) Manufacturing",
        "C) Temporary transport and storage",
        "D) Testing"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 31,
      "question": "What equipment is used to monitor freezer temperature?",
      "options": [
        "A) Thermometer",
        "B) Hygrometer",
        "C) Barometer",
        "D) pH meter"
      ],
      "correct": 0
    },
    {
      "type": "mcq",
      "id": 32,
      "question": "What are ice packs filled with?",
      "options": [
        "A) Regular water",
        "B) Salt water",
        "C) Distilled water",
        "D) Any liquid"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 33,
      "question": "What type of vaccines are most sensitive to freezing?",
      "options": [
        "A) Live vaccines",
        "B) Killed vaccines",
        "C) Liquid vaccines",
        "D) Powder vaccines"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 34,
      "question": "What is the most reliable power source for refrigerators?",
      "options": [
        "A) Solar power",
        "B) Gas power",
        "C) Electricity",
        "D) Battery power"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 35,
      "question": "What should be checked when vaccine is exposed to high temperature?",
      "options": [
        "A) Color change",
        "B) Vaccine cold chain monitors",
        "C) Smell",
        "D) Texture"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 36,
      "question": "What is injection safety?",
      "options": [
        "A) Using sterile equipment only",
        "B) Process using appropriate equipment without harm to recipient or provider",
        "C) Checking expiry dates",
        "D) Proper storage only"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 37,
      "question": "What are the parts of a needle and syringe? (Select main components)",
      "options": [
        "A) Only barrel and plunger",
        "B) Barrel, plunger, adapter, shaft",
        "C) Only needle and syringe",
        "D) Plunger and shaft only"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 38,
      "question": "What is the sharp ending of the needle called?",
      "options": [
        "A) Adapter",
        "B) Barrel",
        "C) Shaft",
        "D) Plunger"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 39,
      "question": "Which vaccines are mentioned for shake test?",
      "options": [
        "A) BCG and Polio",
        "B) Pentavalent, HBV, Td",
        "C) Yellow fever and Measles",
        "D) All vaccines"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 40,
      "question": "What happens to vaccines when exposed to heat over time?",
      "options": [
        "A) They become more effective",
        "B) VVM changes color irreversibly",
        "C) They freeze",
        "D) Nothing happens"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 41,
      "question": "What is the purpose of Government Area in cold chain?",
      "options": [
        "A) Manufacturing vaccines",
        "B) Final distribution point",
        "C) Storage and distribution",
        "D) Testing vaccines"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 42,
      "question": "What should you do with vaccines in VVM stage 3 & 4?",
      "options": [
        "A) Use immediately",
        "B) Store in freezer",
        "C) Cannot be used",
        "D) Test first"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 43,
      "question": "What is the main advantage of electric refrigerators?",
      "options": [
        "A) Cheapest option",
        "B) Most portable",
        "C) Least costly to run and easy to maintain",
        "D) Largest capacity"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 44,
      "question": "What are freezers used for in cold chain?",
      "options": [
        "A) Storing all vaccines",
        "B) Keeping vaccines at temperature below 0°C",
        "C) Manufacturing ice packs",
        "D) Both B and C"
      ],
      "correct": 3
    },
    {
      "type": "mcq",
      "id": 45,
      "question": "What is a vaccine reaction?",
      "options": [
        "A) Manufacturing error",
        "B) Event where individual reacts to particular vaccine",
        "C) Storage problem",
        "D) Administration error"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 46,
      "question": "What causes programme error in AEFI classification?",
      "options": [
        "A) Vaccine manufacturing",
        "B) Individual sensitivity",
        "C) Error in vaccine preparation or administration",
        "D) Storage issues"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 47,
      "question": "Most vaccine reactions are:",
      "options": [
        "A) Severe and require treatment",
        "B) Mild, common and settle without treatment",
        "C) Always dangerous",
        "D) Permanent"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 48,
      "question": "What is the volume used for other types of vaccines (not BCG)?",
      "options": [
        "A) 0.05ml",
        "B) 0.5ml",
        "C) 1ml",
        "D) 2ml"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 49,
      "question": "What are the sizes of ice packs mentioned?",
      "options": [
        "A) 0.4, 0.5, 0.6 liters",
        "B) 0.3, 0.4, 0.6 liters",
        "C) 0.2, 0.4, 0.6 liters",
        "D) 0.4, 0.6, 0.8 liters"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 50,
      "question": "What should you avoid touching on the needle?",
      "options": [
        "A) The adapter",
        "B) The shaft",
        "C) The plunger",
        "D) The barrel"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 51,
      "question": "What is the temperature range for freeze watch test?",
      "options": [
        "A) Below 0°C for 1 hour",
        "B) 20°C overnight",
        "C) Both A and B",
        "D) Above 8°C"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "question": "What happens during shake test?",
      "options": [
        "A) Vaccine is heated",
        "B) Content is frozen and then tested",
        "C) Vaccine is diluted",
        "D) Vaccine is discarded"
      ],
      "id": 52,
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 53,
      "question": "What is the function of plunger seal?",
      "options": [
        "A) Sharp body of syringe",
        "B) Green colored needle part",
        "C) Sealing component",
        "D) Sharp ending of needle"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 54,
      "question": "Which level comes after State Cold Chain Store?",
      "options": [
        "A) Zonal Store",
        "B) Government Area",
        "C) Health Facility",
        "D) National Store"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 55,
      "question": "What type of vaccines are Pentavalent, HBV, and Td?",
      "options": [
        "A) Live vaccines",
        "B) Liquid form vaccines",
        "C) Frozen vaccines",
        "D) Powder vaccines"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 56,
      "question": "What is one of the challenges mentioned for immunization coverage?",
      "options": [
        "A) Too many vaccines available",
        "B) Waiting time when health workers are busy",
        "C) Vaccines are too effective",
        "D) Health facilities are too close"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 57,
      "question": "What should be maintained in cold chain equipment?",
      "options": [
        "A) High temperature",
        "B) Room temperature",
        "C) Reliable electricity supply",
        "D) Humidity levels"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 58,
      "question": "What are cold boxes used by health facility staff for?",
      "options": [
        "A) Manufacturing vaccines",
        "B) Collect and transport vaccine from LGA store to immunization post",
        "C) Testing vaccines",
        "D) Disposing vaccines"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 59,
      "question": "What makes vaccine carriers different from cold boxes?",
      "options": [
        "A) They stay cold longer",
        "B) They are larger",
        "C) They are smaller and easier to carry but don't stay cold as long",
        "D) They are more expensive"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 60,
      "question": "What is the purpose of freeze watch indicators?",
      "options": [
        "A) To measure temperature",
        "B) Small vial of red liquid that breaks when drops below 0°C",
        "C) To test vaccine potency",
        "D) To monitor humidity"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 61,
      "question": "What types of vaccine carriers are mentioned?",
      "options": [
        "A) Geostyle and Rush",
        "B) Cold and Hot",
        "C) Small and Large",
        "D) Manual and Automatic"
      ],
      "correct": 0
    },
    {
      "type": "mcq",
      "id": 62,
      "question": "What is mentioned about serious vaccine reactions?",
      "options": [
        "A) They are very common",
        "B) They are very rare",
        "C) They always occur",
        "D) They are preventable"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 63,
      "question": "What should you do if refrigerator is out of order?",
      "options": [
        "A) Discard all vaccines",
        "B) Use vaccine carrier for temporary storage",
        "C) Store at room temperature",
        "D) Send back to manufacturer"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 64,
      "question": "What does LGA stand for in the context?",
      "options": [
        "A) Large Government Area",
        "B) Local Government Area",
        "C) Licensed Government Area",
        "D) Limited Government Area"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 65,
      "question": "What is the main requirement for cold chain system?",
      "options": [
        "A) Fast transportation",
        "B) Cheap storage",
        "C) Maintaining potency of vaccines at proper temperature",
        "D) Large storage capacity"
      ],
      "correct": 2
    }
  ],
  "Immunity&Immunization": [
    {
      "type": "fill-in-the-blank",
      "id": 1,
      "question": "AEFI stands for _______ _______ _______ _______.",
      "answer": "Adverse Event Following Immunization"
    },
    {
      "type": "fill-in-the-blank",
      "id": 2,
      "question": "Vaccines should be stored at _____°C to _____°C.",
      "answer": "2°C to 8°C"
    },
    {
      "type": "fill-in-the-blank",
      "id": 3,
      "question": "BCG vaccination is given using _______ ml auto disposable syringe.",
      "answer": "0.05"
    },
    {
      "type": "fill-in-the-blank",
      "id": 4,
      "question": "The green colored part of the needle is called the _______.",
      "answer": "adapter"
    },
    {
      "type": "fill-in-the-blank",
      "id": 5,
      "question": "CCO stands for _______ _______ _______.",
      "answer": "Cold Chain Officer"
    },
    {
      "type": "fill-in-the-blank",
      "id": 6,
      "question": "There are _______ stages in Vaccine Vial Monitor (VVM).",
      "answer": "4"
    },
    {
      "type": "theory",
      "id": 7,
      "question": "Vaccines in VVM stage _______ and _______ can be used.",
      "answer": "1 and 2"
    },
    {
      "type": "theory",
      "id": 8,
      "question": "The sharp ending of the needle is called the _______.",
      "answer": "shaft"
    },
    {
      "type": "theory",
      "id": 9,
      "question": "Sterilization should be done by boiling for _______ minutes.",
      "answer": "20"
    },
    {
      "type": "theory",
      "id": 10,
      "question": "The needle size for babies is _______g.",
      "answer": "23"
    },
    {
      "type": "theory",
      "id": 11,
      "question": "The needle size for adults is _______g.",
      "answer": "21"
    },
    {
      "type": "theory",
      "id": 12,
      "question": "BCG vaccine reconstitution volume is _______ ml.",
      "answer": "1"
    },
    {
      "type": "theory",
      "id": 13,
      "question": "Ice packs exist in _______ sizes of _______, _______ and _______ liters.",
      "answer": "3 sizes of 0.6, 0.4 and 0.3"
    },
    {
      "type": "theory",
      "id": 14,
      "question": "The first step in cold chain system is the _______.",
      "answer": "manufacturer"
    },
    {
      "type": "theory",
      "id": 15,
      "question": "After the manufacturer, vaccines go to _______ to the _______.",
      "answer": "transit to the airport"
    },
    {
      "type": "fill-in-the-blank",
      "id": 16,
      "question": "Shake test can be done for _______, _______ and _______ vaccines.",
      "answer": "Pentavalent, HBV, Td"
    },
    {
      "type": "fill-in-the-blank",
      "id": 17,
      "question": "_______ is the process of eliminating all forms of microorganisms including spores.",
      "answer": "Sterilization"
    },
    {
      "type": "fill-in-the-blank",
      "id": 18,
      "question": "Most vaccine reactions are _______ and _______ and settle without treatment.",
      "answer": "mild and common"
    },
    {
      "type": "fill-in-the-blank",
      "id": 19,
      "question": "Vaccine carriers are _______ than cold boxes and easier to carry.",
      "answer": "smaller"
    },
    {
      "type": "fill-in-the-blank",
      "id": 20,
      "question": "Freeze watch indicators consist of a small vial of _______ liquid attached to a white card.",
      "answer": "red"
    },
    {
      "type": "mcq",
      "id": 21,
      "question": "Hepatitis B is how many times more infectious than HIV?",
      "options": [
        "50-100 times",
        "100-200 times",
        "200-300 times",
        "300-400 times"
      ],
      "correct": 0
    },
    {
      "type": "mcq",
      "id": 22,
      "question": "Which of the following is a route of Hepatitis B transmission?",
      "options": [
        "Airborne droplets",
        "Contaminated food",
        "From mother to child during birth",
        "Mosquito bites"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 23,
      "question": "Pentavalent vaccine protects against how many diseases?",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 24,
      "question": "The target population for children under 1 year includes vaccines for:",
      "options": [
        "Routine immunization only",
        "Emergency immunization only",
        "Routine immunization with specific antigens",
        "Optional immunization"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 25,
      "question": "Women of childbearing age (15-49 years) are targeted for:",
      "options": [
        "BCG vaccination",
        "Tetanus diphtheria vaccination",
        "Measles vaccination",
        "Polio vaccination"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 26,
      "question": "The angle for intradermal injection is:",
      "options": [
        "15 degrees",
        "30 degrees",
        "45 degrees",
        "90 degrees"
      ],
      "correct": 0
    },
    {
      "type": "mcq",
      "id": 27,
      "question": "The angle for subcutaneous injection is:",
      "options": [
        "15 degrees",
        "30 degrees",
        "45 degrees",
        "90 degrees"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 28,
      "question": "The angle for intramuscular injection is:",
      "options": [
        "15 degrees",
        "45 degrees",
        "90 degrees",
        "120 degrees"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 29,
      "question": "Which vaccine is given in the left upper arm?",
      "options": [
        "OPV",
        "BCG",
        "HBV",
        "Pentavalent"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 30,
      "question": "HBV vaccine is administered in which site?",
      "options": [
        "Left upper arm",
        "Right upper arm",
        "Outer part of right thigh",
        "Outer part of left thigh"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 31,
      "question": "What is the main mode of tuberculosis transmission?",
      "options": [
        "Contact with infected surfaces",
        "Airborne droplets when infected person coughs or sneezes",
        "Through contaminated food",
        "Through insect bites"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 32,
      "question": "TB spreads rapidly in:",
      "options": [
        "Well-ventilated areas",
        "Overcrowded conditions",
        "Cold environments",
        "Sterile environments"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 33,
      "question": "Which symptom is specific to tuberculosis of bone and joint?",
      "options": [
        "Night sweats",
        "Persistent cough",
        "Swelling and pain with crippling effect",
        "Weight loss"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 34,
      "question": "The minimum duration for DOTS treatment is:",
      "options": [
        "3 months",
        "6 months",
        "9 months",
        "12 months"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 35,
      "question": "Which of the following is a symptom of poliomyelitis?",
      "options": [
        "Fever with sudden onset of paralysis",
        "Persistent cough",
        "Night sweats",
        "Chest pain"
      ],
      "correct": 0
    },
    {
      "type": "mcq",
      "id": 36,
      "question": "OPV contains:",
      "options": [
        "Killed polio virus",
        "Live attenuated polio virus",
        "Polio toxoid",
        "Synthetic polio antigen"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 37,
      "question": "The interval between OPV doses should be:",
      "options": [
        "2 weeks",
        "4 weeks",
        "6 weeks",
        "8 weeks"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 38,
      "question": "IPV is given at:",
      "options": [
        "6 weeks",
        "10 weeks",
        "14 weeks",
        "18 weeks"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 39,
      "question": "Which of the following is NOT a sign of Hepatitis B?",
      "options": [
        "Fatigue",
        "Jaundice",
        "Loose stools",
        "Abdominal pain"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 40,
      "question": "Hepatitis B can be transmitted through:",
      "options": [
        "Sharing meals",
        "Unsafe injection practices",
        "Casual contact",
        "Respiratory droplets"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 41,
      "question": "The treatment for acute Hepatitis B is:",
      "options": [
        "Antiviral agents",
        "Antibiotics",
        "Mainly supportive",
        "Surgical intervention"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 42,
      "question": "Which age group is targeted for measles vaccination?",
      "options": [
        "0-6 months",
        "6-12 months",
        "9-59 months",
        "12-24 months"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 43,
      "question": "The purpose of immunization for 1-20 years age group is to reduce:",
      "options": [
        "Tuberculosis",
        "Poliomyelitis",
        "Cerebro-spinal meningitis",
        "Hepatitis B"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 44,
      "question": "Children 0-59 months are targeted for eradication of:",
      "options": [
        "Measles",
        "Tuberculosis",
        "Poliomyelitis",
        "Tetanus"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 45,
      "question": "Which vaccination site is used for Pentavalent vaccine?",
      "options": [
        "Left upper arm",
        "Right upper arm",
        "Outer part of left thigh",
        "Mouth"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 46,
      "question": "The dose of BCG vaccine is:",
      "options": [
        "0.05ml",
        "0.1ml",
        "0.5ml",
        "1ml"
      ],
      "correct": 0
    },
    {
      "type": "mcq",
      "id": 47,
      "question": "The dose of HBV vaccine is:",
      "options": [
        "0.05ml",
        "0.1ml",
        "0.5ml",
        "1ml"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 48,
      "question": "How many drops of OPV are given per dose?",
      "options": [
        "1 drop",
        "2 drops",
        "3 drops",
        "4 drops"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 49,
      "question": "Which vaccine prevents whooping cough?",
      "options": [
        "BCG",
        "OPV",
        "Pentavalent (contains Pertussis)",
        "HBV"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 50,
      "question": "Yellow fever vaccination is included in:",
      "options": [
        "Routine immunization",
        "Emergency immunization",
        "Special circumstances immunization",
        "Optional immunization"
      ],
      "correct": 2
    },
    {
      "type": "mcq",
      "id": 51,
      "question": "Pneumococcal infections can be prevented by:",
      "options": [
        "BCG vaccine",
        "Pneumococcal conjugate vaccine",
        "OPV",
        "Measles vaccine"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 52,
      "question": "The local name for tuberculosis is:",
      "options": [
        "Arun iko fee",
        "Arun ropa rose",
        "Arun jedo jedo",
        "None of the above"
      ],
      "correct": 0
    },
    {
      "type": "mcq",
      "id": 53,
      "question": "Environmental and personal hygiene helps prevent:",
      "options": [
        "Tuberculosis",
        "Poliomyelitis",
        "Hepatitis B",
        "All of the above"
      ],
      "correct": 1
    },
    {
      "type": "mcq",
      "id": 54,
      "question": "Which type of immunity lasts for a long period?",
      "options": [
        "Active immunity",
        "Passive immunity",
        "Innate immunity",
        "Artificial passive immunity"
      ],
      "correct": 0
    },
    {
      "type": "mcq",
      "id": 55,
      "question": "Vaccination is the administration of antigens to stimulate:",
      "options": [
        "Passive immunity",
        "Individual immune system to develop adaptive immunity",
        "Artificial immunity only",
        "Temporary immunity"
      ],
      "correct": 1
    },
    {
      "id": 56,
      "question": "What are the three types of polio viruses?",
      "answer": "Type 1, Type 2, and Type 3"
    },
    {
      "id": 57,
      "question": "What does DOTS stand for in tuberculosis treatment?",
      "answer": "Directly Observed Treatment Short-course"
    },
    {
      "id": 58,
      "question": "Name the five diseases prevented by Pentavalent vaccine.",
      "answer": "Diphtheria, Pertussis, Tetanus, Hepatitis B, and Haemophilus influenzae type B"
    },
    {
      "id": 59,
      "question": "What is the causative agent of tuberculosis?",
      "answer": "Mycobacterium tuberculosis"
    },
    {
      "id": 60,
      "question": "At what angles are intradermal, subcutaneous, and intramuscular injections given?",
      "answer": "15°, 45°, and 90° respectively"
    },
    {
      "id": 61,
      "question": "What are the four main routes of vaccine administration?",
      "answer": "Intradermal, Subcutaneous, Oral, and Intramuscular"
    },
    {
      "id": 62,
      "question": "What is the minimum treatment duration for tuberculosis?",
      "answer": "At least 6 months"
    },
    {
      "id": 63,
      "question": "Name three modes of Hepatitis B transmission.",
      "answer": "Mother to child during birth, unsafe injection practices, and contact with infected blood"
    },
    {
      "id": 64,
      "question": "What are the two types of polio vaccines?",
      "answer": "Oral Polio Vaccine (OPV) and Inactivated Polio Vaccine (IPV)"
    },
    {
      "id": 65,
      "question": "List four symptoms of tuberculosis.",
      "answer": "Persistent cough, night sweats, weight loss, and fever"
    },
    {
      "id": 66,
      "question": "What is the target age group for measles vaccination?",
      "answer": "Children 9 to 59 months of age"
    },
    {
      "id": 67,
      "question": "What is the dose and site for BCG vaccination?",
      "answer": "0.05ml in the left upper arm, given intradermally"
    },
    {
      "id": 68,
      "question": "What are the two main types of immunity?",
      "answer": "Active immunity and Passive immunity"
    },
    {
      "id": 69,
      "question": "How is tuberculosis primarily transmitted?",
      "answer": "Through airborne droplets when an infected person coughs or sneezes"
    },
    {
      "id": 70,
      "question": "What is the target population for tetanus vaccination?",
      "answer": "Women of childbearing age (15 to 49 years)"
    },
    {
      "id": 71,
      "question": "List three symptoms of poliomyelitis.",
      "answer": "Fever with sudden onset of paralysis, loose stools, and sore throat"
    },
    {
      "id": 72,
      "question": "What is the treatment approach for acute Hepatitis B?",
      "answer": "Mainly supportive treatment, no specific treatment for acute infection"
    },
    {
      "id": 73,
      "question": "What are the five target populations for immunization?",
      "answer": "Children under 1 year, women of childbearing age, children 9-59 months, 1-20 years age group, and children 0-59 months"
    },
    {
      "id": 74,
      "question": "How many times more infectious is Hepatitis B compared to HIV?",
      "answer": "50-100 times more infectious"
    },
    {
      "type": "fill-in-the-blank",
      "id": 75,
      "question": "What is the causative agent of tuberculosis?",
      "answer": "Mycobacterium tuberculosis"
    },
    {
      "type": "fill-in-the-blank",
      "id": 76,
      "question": "At what angles are intradermal, subcutaneous, and intramuscular injections given?",
      "answer": "15°, 45°, and 90° respectively"
    },
    {
      "type": "fill-in-the-blank",
      "id": 77,
      "question": "What are the four main routes of vaccine administration?",
      "answer": "Intradermal, Subcutaneous, Oral, and Intramuscular"
    },
    {
      "type": "fill-in-the-blank",
      "id": 78,
      "question": "What is the minimum treatment duration for tuberculosis?",
      "answer": "At least 6 months"
    },
    {
      "type": "fill-in-the-blank",
      "id": 79,
      "question": "Name three modes of Hepatitis B transmission.",
      "answer": "Mother to child during birth, unsafe injection practices, and contact with infected blood"
    },
    {
      "type": "fill-in-the-blank",
      "id": 80,
      "question": "What are the two types of polio vaccines?",
      "answer": "Oral Polio Vaccine (OPV) and Inactivated Polio Vaccine (IPV)"
    },
    {
      "type": "fill-in-the-blank",
      "id": 81,
      "question": "List four symptoms of tuberculosis.",
      "answer": "Persistent cough, night sweats, weight loss, and fever"
    },
    {
      "type": "fill-in-the-blank",
      "id": 82,
      "question": "What is the target age group for measles vaccination?",
      "answer": "Children 9 to 59 months of age"
    },
    {
      "type": "fill-in-the-blank",
      "id": 83,
      "question": "What is the dose and site for BCG vaccination?",
      "answer": "0.05ml in the left upper arm, given intradermally"
    },
    {
      "type": "fill-in-the-blank",
      "id": 84,
      "question": "What are the two main types of immunity?",
      "answer": "Active immunity and Passive immunity"
    },
    {
      "type": "fill-in-the-blank",
      "id": 85,
      "question": "How is tuberculosis primarily transmitted?",
      "answer": "Through airborne droplets when an infected person coughs or sneezes"
    },
    {
      "type": "fill-in-the-blank",
      "id": 86,
      "question": "What is the target population for tetanus vaccination?",
      "answer": "Women of childbearing age (15 to 49 years)"
    },
    {
      "type": "fill-in-the-blank",
      "id": 87,
      "question": "List three symptoms of poliomyelitis.",
      "answer": "Fever with sudden onset of paralysis, loose stools, and sore throat"
    },
    {
      "type": "fill-in-the-blank",
      "id": 88,
      "question": "What is the treatment approach for acute Hepatitis B?",
      "answer": "Mainly supportive treatment, no specific treatment for acute infection"
    },
    {
      "type": "fill-in-the-blank",
      "id": 89,
      "question": "What are the five target populations for immunization?",
      "answer": "Children under 1 year, women of childbearing age, children 9-59 months, 1-20 years age group, and children 0-59 months"
    },
    {
      "type": "fill-in-the-blank",
      "id": 90,
      "question": "How many times more infectious is Hepatitis B compared to HIV?",
      "answer": "50-100 times more infectious"
    },
    {
      "type": "fill-in-the-blank",
      "id": 91,
      "question": "What is the interval between OPV doses?",
      "answer": "The interval between doses must be 4 weeks"
    },
    {
      "type": "fill-in-the-blank",
      "id": 92,
      "question": "Is BCG vaccine given orally?",
      "answer": "No"
    },
    {
      "type": "fill-in-the-blank",
      "id": 93,
      "question": "Does passive immunity last for a long period?",
      "answer": "No"
    },
    {
      "type": "fill-in-the-blank",
      "id": 94,
      "question": "Is tuberculosis transmitted through airborne droplets?",
      "answer": "Yes"
    },
    {
      "type": "fill-in-the-blank",
      "id": 95,
      "question": "Can Hepatitis B be transmitted from mother to child?",
      "answer": "Yes"
    },
    {
      "type": "fill-in-the-blank",
      "id": 96,
      "question": "Is OPV a live attenuated vaccine?",
      "answer": "Yes"
    },
    {
      "type": "fill-in-the-blank",
      "id": 97,
      "question": "Does 1 in every 200 polio infections cause irreversible paralysis?",
      "answer": "Yes"
    },
    {
      "type": "fill-in-the-blank",
      "id": 98,
      "question": "Is the angle for intramuscular injection 45 degrees?",
      "answer": "No"
    },
    {
      "type": "fill-in-the-blank",
      "id": 99,
      "question": "Can environmental hygiene help prevent poliomyelitis?",
      "answer": "Yes"
    },
    {
      "type": "fill-in-the-blank",
      "id": 100,
      "question": "Is there a specific treatment for acute Hepatitis B?",
      "answer": "No"
    },
    {
      "type": "fill-in-the-blank",
      "id": 101,
      "question": "Does active immunity provide long-lasting protection?",
      "answer": "Yes"
    },
    {
      "type": "fill-in-the-blank",
      "id": 102,
      "question": "Is tuberculosis treatment shorter than 6 months?",
      "answer": "No"
    },
    {
      "type": "fill-in-the-blank",
      "id": 103,
      "question": "Can tuberculosis affect bones and joints?",
      "answer": "Yes"
    },
    {
      "type": "fill-in-the-blank",
      "id": 104,
      "question": "Is IPV given at 6 weeks of age?",
      "answer": "No"
    },
    {
      "type": "fill-in-the-blank",
      "id": 105,
      "question": "Does Pentavalent vaccine protect against 5 diseases?",
      "answer": "Yes"
    },
    {
      "type": "fill-in-the-blank",
      "id": 106,
      "question": "Is weight loss a symptom of tuberculosis?",
      "answer": "Yes"
    },
    {
      "type": "fill-in-the-blank",
      "id": 107,
      "question": "Can poliomyelitis be prevented through vaccination?",
      "answer": "Yes"
    },
    {
      "type": "fill-in-the-blank",
      "id": 108,
      "question": "Is Hepatitis B 50–100 times more infectious than HIV?",
      "answer": "Yes"
    },
    {
      "type": "fill-in-the-blank",
      "id": 109,
      "question": "Does overcrowding increase TB transmission risk?",
      "answer": "Yes"
    },
    {
      "type": "fill-in-the-blank",
      "id": 110,
      "question": "Is the BCG vaccine dose 0.5ml?",
      "answer": "No"
    },
    {
      "type": "fill-in-the-blank",
      "id": 111,
      "question": "Are there vaccines for all the mentioned preventable diseases?",
      "answer": "Yes"
    }
  ],
  "Anatomy": [

    {
      "type": "theory",
      "id": 1,
      "question": "Explain the structure and function of the blood-brain barrier. How do astrocytes contribute to its formation?",
      "answer": "The blood-brain barrier is a selective barrier formed by tight junctions between endothelial cells of brain capillaries, along with astrocyte end-feet. It prevents harmful substances from entering the brain while allowing essential nutrients to pass through. Astrocytes contribute by wrapping their processes around capillaries and releasing factors that maintain tight junction integrity."
    },
    {
      "type": "theory",
      "id": 2,
      "question": "Describe the three stages of urine formation and explain what happens in each stage.",
      "answer": "1) Filtration: Blood is filtered in the glomerulus, removing water, salts, glucose, and waste products. 2) Reabsorption: Useful substances like glucose, amino acids, and most water are reabsorbed back into the blood in the tubules. 3) Secretion: Additional waste products and excess ions are actively transported from blood into urine in the collecting duct."
    },
    {
      "type": "theory",
      "id": 3,
      "question": "Compare and contrast the sympathetic and parasympathetic divisions of the autonomic nervous system.",
      "answer": "Sympathetic: 'Fight or flight' response, increases heart rate, dilates pupils, inhibits digestion, releases norepinephrine, originates from thoracolumbar region. Parasympathetic: 'Rest and digest' response, decreases heart rate, constricts pupils, stimulates digestion, releases acetylcholine, originates from craniosacral region. They work antagonistically to maintain homeostasis."
    },
    {
      "type": "theory",
      "id": 4,
      "question": "Explain the feedback mechanism that regulates growth hormone release from the anterior pituitary.",
      "answer": "The hypothalamus releases GHRH (growth hormone-releasing hormone) which stimulates the anterior pituitary to release GH. When GH levels are sufficient, the hypothalamus releases somatostatin (GHIH) which inhibits GH release. Additionally, IGF-1 produced in response to GH provides negative feedback to both the hypothalamus and pituitary, creating a complex regulatory loop."
    },
    {
      "type": "theory",
      "id": 5,
      "question": "Describe the different types of neuroglia and their specific functions in the nervous system.",
      "answer": "CNS: Astrocytes (support, blood-brain barrier), Oligodendrocytes (myelin in CNS), Microglia (immune defense), Ependymal cells (CSF production). PNS: Schwann cells (myelin in PNS), Satellite cells (support cell bodies in ganglia). Each type has specialized functions crucial for nervous system maintenance and function."
    },
    {
      "type": "theory",
      "id": 6,
      "question": "Explain how diabetes mellitus affects the urinary system and describe the resulting symptoms.",
      "answer": "In diabetes, high blood glucose overwhelms the kidney's ability to reabsorb glucose, leading to glucose in urine (glycosuria). This creates osmotic diuresis, causing excessive urine production (polyuria), which leads to dehydration and excessive thirst (polydipsia). Over time, high glucose damages kidney vessels, potentially leading to diabetic nephropathy."
    },
    {
      "type": "theory",
      "id": 7,
      "question": "Describe the structure and function of a chemical synapse, including the role of neurotransmitters.",
      "answer": "A chemical synapse consists of a presynaptic terminal, synaptic cleft, and postsynaptic membrane. When an action potential arrives, calcium channels open, causing vesicles to release neurotransmitters into the cleft. Neurotransmitters bind to receptors on the postsynaptic membrane, causing ion channels to open and generating a postsynaptic potential. Neurotransmitters are then removed by reuptake or enzymatic breakdown."
    },
    {
      "type": "theory",
      "id": 8,
      "question": "Explain the role of the hypothalamus in linking the nervous and endocrine systems.",
      "answer": "The hypothalamus produces releasing and inhibiting hormones that control the anterior pituitary, and produces ADH and oxytocin stored in the posterior pituitary. It receives neural input and responds with hormonal output, integrating nervous system signals with endocrine responses. It also directly controls autonomic functions and maintains homeostasis through both neural and hormonal mechanisms."
    },
    {
      "type": "theory",
      "id": 9,
      "question": "Describe the pathway of a spinal reflex arc and explain why reflexes are important for survival.",
      "answer": "Pathway: Stimulus → Sensory receptor → Sensory neuron → Integration center (spinal cord) → Motor neuron → Effector (muscle/gland) → Response. Reflexes are important because they provide rapid, automatic responses to potentially harmful stimuli without requiring conscious thought, protecting the body from injury and maintaining homeostasis more quickly than voluntary responses."
    },
    {
      "type": "theory",
      "id": 10,
      "question": "Explain how the renin-angiotensin-aldosterone system regulates blood pressure and blood volume.",
      "answer": "When blood pressure drops, kidneys release renin, which converts angiotensinogen to angiotensin I. ACE converts this to angiotensin II, which causes vasoconstriction and stimulates aldosterone release. Aldosterone increases sodium reabsorption in kidneys, leading to water retention and increased blood volume. This system helps maintain blood pressure and fluid balance."
    },
    {
      "type": "theory",
      "id": 11,
      "question": "Compare the functions of the different lobes of the cerebral cortex.",
      "answer": "Frontal lobe: Motor control, personality, decision-making, planning. Parietal lobe: Sensory processing, spatial awareness, integration. Temporal lobe: Hearing, memory, language comprehension. Occipital lobe: Visual processing. Each lobe has specialized functions but works together for complex behaviors and cognition."
    },
    {
      "type": "theory",
      "id": 12,
      "question": "Explain the consequences of meningitis and why it is considered a medical emergency.",
      "answer": "Meningitis is inflammation of the meninges, often caused by bacterial or viral infection. It can cause increased intracranial pressure, leading to brain damage, seizures, stroke, or death. It's a medical emergency because bacteria can rapidly multiply in CSF, and inflammation can quickly compromise brain function. Early treatment with antibiotics (for bacterial) is crucial for survival and preventing permanent damage."
    },
    {
      "type": "theory",
      "id": 13,
      "question": "Describe how thyroid hormones are regulated and their effects on metabolism.",
      "answer": "The hypothalamus releases TRH, which stimulates the anterior pituitary to release TSH. TSH stimulates the thyroid to produce T3 and T4. These hormones increase metabolic rate, protein synthesis, and heat production. Negative feedback occurs when T3/T4 levels inhibit TRH and TSH release. Thyroid hormones are essential for growth, development, and maintaining basal metabolic rate."
    },
    {
      "type": "theory",
      "id": 14,
      "question": "Explain the difference between motor and sensory nerve fibers and describe their pathways.",
      "answer": "Sensory fibers carry information from receptors to the CNS via afferent pathways, typically crossing to the opposite side and synapsing in the thalamus before reaching the cortex. Motor fibers carry commands from the CNS to effectors via efferent pathways, with upper motor neurons in the cortex synapsing with lower motor neurons in the brainstem or spinal cord, which then innervate muscles."
    },
    {
      "type": "theory",
      "id": 15,
      "question": "Describe the formation and circulation of cerebrospinal fluid and its functions.",
      "answer": "CSF is produced by choroid plexuses in the ventricles, flows through the ventricular system, exits through foramina to the subarachnoid space, and is absorbed by arachnoid granulations into venous blood. Functions include: cushioning the brain, providing buoyancy, removing metabolic waste, maintaining chemical environment, and providing a pathway for hormone transport."
    },
    {
      "type": "theory",
      "id": 16,
      "question": "Explain how chronic kidney disease progresses and its effects on other body systems.",
      "answer": "CKD progresses through 5 stages as GFR declines. Effects include: fluid retention and hypertension, electrolyte imbalances (hyperkalemia, hyperphosphatemia), metabolic acidosis, anemia (decreased erythropoietin), bone disease (disturbed calcium/phosphate metabolism), cardiovascular complications, and uremia. Eventually requires dialysis or transplantation."
    },
    {
      "type": "theory",
      "id": 17,
      "question": "Describe the organization of the cranial nerves and provide examples of their functions.",
      "answer": "12 pairs of cranial nerves emerge directly from the brain. Examples: I-Olfactory (smell), II-Optic (vision), III-Oculomotor (eye movement), V-Trigeminal (facial sensation, chewing), VII-Facial (facial expression, taste), VIII-Vestibulocochlear (hearing, balance), X-Vagus (parasympathetic to organs). They can be sensory, motor, or mixed, and control head/neck functions plus some body organs."
    },
    {
      "type": "theory",
      "id": 18,
      "question": "Explain the role of the adrenal glands in stress response and hormone production.",
      "answer": "Adrenal cortex produces: cortisol (stress hormone, glucose regulation), aldosterone (electrolyte balance), and sex hormones. Adrenal medulla produces epinephrine and norepinephrine for acute stress response. During stress, the HPA axis activates cortisol release for long-term adaptation, while the sympathetic nervous system triggers catecholamine release for immediate 'fight or flight' response."
    },
    {
      "type": "theory",
      "id": 19,
      "question": "Describe the blood supply to the brain and explain why it is so critical.",
      "answer": "Brain receives blood from carotid and vertebral arteries, forming the Circle of Willis for redundancy. Critical because: brain has high metabolic demands, no energy storage, requires continuous glucose and oxygen supply, and neurons cannot regenerate easily. Interruption of blood flow quickly leads to cell death and permanent damage, as seen in strokes."
    },
    {
      "type": "theory",
      "id": 20,
      "question": "Explain how action potentials are generated and propagated along neurons.",
      "answer": "Action potentials result from rapid changes in membrane permeability. Depolarization opens voltage-gated Na+ channels, causing rapid depolarization. At peak, Na+ channels inactivate and K+ channels open, causing repolarization. The refractory period prevents backward propagation. In myelinated axons, saltatory conduction allows rapid propagation by jumping between nodes of Ranvier, increasing speed and efficiency."
    },
    [
  {
    "id": 21,
    "type": "fill-in-the-blank",
    "system": "Respiratory System",
    "question": "The primary organs of respiration are the _______, which contain tiny air sacs called _______.",
    "answers": [
      "lungs",
      "alveoli"
    ],
    "explanation": "Lungs are the main respiratory organs containing alveoli where gas exchange occurs."
  },
  {
    "id": 22,
    "type": "fill-in-the-blank",
    "system": "Respiratory System",
    "question": "During inspiration, the _______ muscle contracts and moves _______, creating negative pressure in the thoracic cavity.",
    "answers": [
      "diaphragm",
      "downward"
    ],
    "explanation": "The diaphragm is the primary muscle of inspiration that creates the pressure difference for air to flow in."
  },
  {
    "id": 23,
    "type": "fill-in-the-blank",
    "system": "Respiratory System",
    "question": "The _______ prevents food from entering the trachea during swallowing, while the _______ contains the vocal cords.",
    "answers": [
      "epiglottis",
      "larynx"
    ],
    "explanation": "The epiglottis acts as a protective flap, and the larynx houses the vocal cords for speech."
  },
  {
    "id": 24,
    "type": "fill-in-the-blank",
    "system": "Respiratory System",
    "question": "_______ is a respiratory disease characterized by inflammation of the bronchi, while _______ involves infection of the alveoli.",
    "answers": [
      "Bronchitis",
      "pneumonia"
    ],
    "explanation": "Bronchitis affects the bronchial tubes, while pneumonia affects the air sacs in the lungs."
  },
  {
    "id": 25,
    "type": "fill-in-the-blank",
    "system": "Respiratory System",
    "question": "The mechanism of breathing involves _______ (breathing in) and _______ (breathing out), controlled primarily by the _______ nerve.",
    "answers": [
      "inspiration",
      "expiration",
      "phrenic"
    ],
    "explanation": "Breathing consists of inspiration and expiration cycles, with the phrenic nerve controlling diaphragm movement."
  },
  {
    "id": 26,
    "type": "fill-in-the-blank",
    "system": "Skeletal System",
    "question": "The adult human skeleton contains _______ bones, which are classified into _______ main types based on their shape.",
    "answers": [
      "206",
      "four"
    ],
    "explanation": "Adults have 206 bones classified as long, short, flat, and irregular bones."
  },
  {
    "id": 27,
    "type": "fill-in-the-blank",
    "system": "Skeletal System",
    "question": "The _______ is an example of a long bone, while the _______ bones in the wrist are examples of short bones.",
    "answers": [
      "femur",
      "carpal"
    ],
    "explanation": "The femur is the longest bone in the body, while carpal bones are short bones in the wrist."
  },
  {
    "id": 28,
    "type": "fill-in-the-blank",
    "system": "Skeletal System",
    "question": "A _______ fracture occurs when the bone breaks through the skin, while a _______ fracture is incomplete and common in children.",
    "answers": [
      "compound",
      "greenstick"
    ],
    "explanation": "Compound fractures pierce the skin, while greenstick fractures are partial breaks in flexible young bones."
  },
  {
    "id": 29,
    "type": "fill-in-the-blank",
    "system": "Skeletal System",
    "question": "_______ joints are immovable and found in the skull, while _______ joints are freely movable like the shoulder and knee.",
    "answers": [
      "Synarthrosis",
      "diarthrosis"
    ],
    "explanation": "Synarthroses are immovable joints, while diarthroses allow free movement."
  },
  {
    "id": 30,
    "type": "fill-in-the-blank",
    "system": "Skeletal System",
    "question": "The skull contains _______ bones, including the _______ bone that forms the forehead and the _______ bone that forms the lower jaw.",
    "answers": [
      "22",
      "frontal",
      "mandible"
    ],
    "explanation": "The skull has 22 bones total, with the frontal bone forming the forehead and mandible forming the lower jaw."
  },
  {
    "id": 31,
    "type": "fill-in-the-blank",
    "system": "Skeletal System",
    "question": "The vertebral column consists of _______ cervical, _______ thoracic, and _______ lumbar vertebrae.",
    "answers": [
      "7",
      "12",
      "5"
    ],
    "explanation": "The spine has 7 cervical (neck), 12 thoracic (chest), and 5 lumbar (lower back) vertebrae."
  },
  {
    "id": 32,
    "type": "fill-in-the-blank",
    "system": "Skeletal System",
    "question": "The _______ is commonly known as the kneecap, while the _______ is the scientific name for the shoulder blade.",
    "answers": [
      "patella",
      "scapula"
    ],
    "explanation": "Patella is the medical term for kneecap, and scapula is the shoulder blade."
  },
  {
    "id": 33,
    "type": "fill-in-the-blank",
    "system": "Skeletal System",
    "question": "_______ joints like the pubic symphysis are slightly movable, while the _______ of the skull are examples of fibrous immovable joints.",
    "answers": [
      "Amphiarthrosis",
      "sutures"
    ],
    "explanation": "Amphiarthroses allow slight movement, while skull sutures are immovable fibrous joints."
  },
  {
    "id": 34,
    "type": "fill-in-the-blank",
    "system": "Cardiovascular System",
    "question": "The human heart has _______ chambers: two _______ that receive blood and two _______ that pump blood.",
    "answers": [
      "four",
      "atria",
      "ventricles"
    ],
    "explanation": "The heart has four chambers - two atria for receiving blood and two ventricles for pumping."
  },
  {
    "id": 35,
    "type": "fill-in-the-blank",
    "system": "Cardiovascular System",
    "question": "The _______ valve is located between the left atrium and left ventricle, while the _______ valve prevents backflow into the right ventricle.",
    "answers": [
      "mitral",
      "pulmonary"
    ],
    "explanation": "The mitral valve controls flow from left atrium to ventricle, while the pulmonary valve prevents backflow."
  },
  {
    "id": 36,
    "type": "fill-in-the-blank",
    "system": "Cardiovascular System",
    "question": "_______ blood cells transport oxygen using the protein _______, while _______ are responsible for blood clotting.",
    "answers": [
      "Red",
      "hemoglobin",
      "platelets"
    ],
    "explanation": "Red blood cells carry oxygen via hemoglobin, and platelets help form blood clots."
  },
  {
    "id": 37,
    "type": "fill-in-the-blank",
    "system": "Cardiovascular System",
    "question": "_______ is the hardening of arteries due to plaque buildup, while _______ refers to high blood pressure.",
    "answers": [
      "Atherosclerosis",
      "hypertension"
    ],
    "explanation": "Atherosclerosis involves arterial plaque formation, while hypertension is elevated blood pressure."
  },
  {
    "id": 38,
    "type": "fill-in-the-blank",
    "system": "Cardiovascular System",
    "question": "The largest artery in the body is the _______, which carries oxygenated blood from the _______ ventricle.",
    "answers": [
      "aorta",
      "left"
    ],
    "explanation": "The aorta is the main artery that receives oxygenated blood from the left ventricle."
  },
  {
    "id": 39,
    "type": "fill-in-the-blank",
    "system": "Digestive System",
    "question": "The _______ produces bile for fat digestion, while the _______ stores and concentrates this bile.",
    "answers": [
      "liver",
      "gallbladder"
    ],
    "explanation": "The liver produces bile, which is stored and concentrated in the gallbladder."
  },
  {
    "id": 40,
    "type": "fill-in-the-blank",
    "system": "Digestive System",
    "question": "The enzyme _______ breaks down proteins in the stomach, while _______ from the pancreas breaks down fats.",
    "answers": [
      "pepsin",
      "lipase"
    ],
    "explanation": "Pepsin digests proteins in the acidic stomach, while pancreatic lipase breaks down fats."
  },
  {
    "id": 41,
    "type": "fill-in-the-blank",
    "system": "Digestive System",
    "question": "The _______ intestine is the primary site for nutrient absorption, while the _______ intestine mainly absorbs water.",
    "answers": [
      "small",
      "large"
    ],
    "explanation": "The small intestine absorbs most nutrients, while the large intestine primarily absorbs water."
  },
  {
    "id": 42,
    "type": "fill-in-the-blank",
    "system": "Digestive System",
    "question": "_______ is the backflow of stomach acid into the esophagus, while _______ is inflammation of the stomach lining.",
    "answers": [
      "GERD",
      "gastritis"
    ],
    "explanation": "GERD involves acid reflux, while gastritis is stomach inflammation."
  },
  {
    "id": 43,
    "type": "fill-in-the-blank",
    "system": "Digestive System",
    "question": "The _______ produces both digestive enzymes and hormones like _______, making it part of both digestive and endocrine systems.",
    "answers": [
      "pancreas",
      "insulin"
    ],
    "explanation": "The pancreas has dual functions - producing digestive enzymes and hormones like insulin."
  },
  {
    "id": 44,
    "type": "fill-in-the-blank",
    "system": "Nervous System",
    "question": "The _______ is the functional unit of the nervous system, consisting of a cell body, _______, and an _______.",
    "answers": [
      "neuron",
      "dendrites",
      "axon"
    ],
    "explanation": "Neurons are nerve cells with dendrites receiving signals and axons transmitting them."
  },
  {
    "id": 45,
    "type": "fill-in-the-blank",
    "system": "Nervous System",
    "question": "The _______ controls balance and coordination, while the _______ regulates vital functions like breathing and heart rate.",
    "answers": [
      "cerebellum",
      "medulla"
    ],
    "explanation": "The cerebellum coordinates movement, while the medulla controls vital autonomic functions."
  },
  {
    "id": 46,
    "type": "fill-in-the-blank",
    "system": "Nervous System",
    "question": "_______ disease is characterized by loss of dopamine-producing neurons, while _______ disease involves progressive memory loss.",
    "answers": [
      "Parkinson's",
      "Alzheimer's"
    ],
    "explanation": "Parkinson's involves dopamine deficiency, while Alzheimer's affects memory and cognition."
  },
  {
    "id": 47,
    "type": "fill-in-the-blank",
    "system": "Nervous System",
    "question": "The _______ nerve (cranial nerve II) is responsible for vision, while the _______ nerve controls facial expressions.",
    "answers": [
      "optic",
      "facial"
    ],
    "explanation": "The optic nerve carries visual information, while the facial nerve controls facial muscles."
  },
  {
    "id": 48,
    "type": "fill-in-the-blank",
    "system": "Nervous System",
    "question": "The _______ nervous system includes the brain and spinal cord, while the _______ nervous system consists of nerves outside these structures.",
    "answers": [
      "central",
      "peripheral"
    ],
    "explanation": "The CNS includes brain and spinal cord, while the PNS includes all other nerves."
  },
  {
    "id": 49,
    "type": "fill-in-the-blank",
    "system": "Endocrine System",
    "question": "The _______ gland is called the 'master gland' because it controls other endocrine glands through _______ hormones.",
    "answers": [
      "pituitary",
      "tropic"
    ],
    "explanation": "The pituitary gland controls other glands via tropic hormones, earning it the 'master gland' title."
  },
  {
    "id": 50,
    "type": "fill-in-the-blank",
    "system": "Endocrine System",
    "question": "_______ regulates blood glucose levels, and its deficiency causes _______ mellitus.",
    "answers": [
      "Insulin",
      "diabetes"
    ],
    "explanation": "Insulin controls blood sugar, and its deficiency or resistance causes diabetes."
  },
  {
    "id": 51,
    "type": "fill-in-the-blank",
    "system": "Endocrine System",
    "question": "The _______ glands produce adrenaline for the fight-or-flight response, while the _______ gland regulates metabolism through thyroxine.",
    "answers": [
      "adrenal",
      "thyroid"
    ],
    "explanation": "Adrenal glands produce adrenaline, while the thyroid produces thyroxine for metabolism."
  },
  {
    "id": 52,
    "type": "fill-in-the-blank",
    "system": "Endocrine System",
    "question": "_______ is the primary male sex hormone produced by the _______, while _______ is the primary female hormone from the ovaries.",
    "answers": [
      "Testosterone",
      "testes",
      "estrogen"
    ],
    "explanation": "Testosterone is produced in testes, while estrogen is produced in ovaries."
  },
  {
    "id": 53,
    "type": "fill-in-the-blank",
    "system": "Urinary System",
    "question": "The _______ is the functional unit of the kidney where blood filtration occurs, consisting of a _______ and tubules.",
    "answers": [
      "nephron",
      "glomerulus"
    ],
    "explanation": "Nephrons contain glomeruli for filtration and tubules for processing the filtered fluid."
  },
  {
    "id": 54,
    "type": "fill-in-the-blank",
    "system": "Urinary System",
    "question": "The _______ carries urine from the kidney to the bladder, while the _______ carries urine from the bladder to outside the body.",
    "answers": [
      "ureter",
      "urethra"
    ],
    "explanation": "Ureters connect kidneys to bladder, while the urethra connects bladder to exterior."
  },
  {
    "id": 55,
    "type": "fill-in-the-blank",
    "system": "Urinary System",
    "question": "_______ is the formation of kidney stones, while _______ is inflammation of the bladder.",
    "answers": [
      "Nephrolithiasis",
      "cystitis"
    ],
    "explanation": "Nephrolithiasis refers to kidney stone formation, while cystitis is bladder inflammation."
  },
  {
    "id": 56,
    "type": "fill-in-the-blank",
    "system": "Urinary System",
    "question": "The hormone _______ regulates water reabsorption in the kidneys, while _______ helps regulate sodium and potassium balance.",
    "answers": [
      "ADH",
      "aldosterone"
    ],
    "explanation": "ADH controls water retention, while aldosterone regulates electrolyte balance."
  },
  {
    "id": 57,
    "type": "fill-in-the-blank",
    "system": "Reproductive System",
    "question": "The _______ produce eggs and female hormones, while fertilization typically occurs in the _______.",
    "answers": [
      "ovaries",
      "fallopian tubes"
    ],
    "explanation": "Ovaries produce ova and hormones, while fertilization usually happens in the fallopian tubes."
  },
  {
    "id": 58,
    "type": "fill-in-the-blank",
    "system": "Reproductive System",
    "question": "The _______ produce sperm, which mature in the _______ before being stored.",
    "answers": [
      "testes",
      "epididymis"
    ],
    "explanation": "Testes produce sperm, which mature and are stored in the epididymis."
  },
  {
    "id": 59,
    "type": "fill-in-the-blank",
    "system": "Reproductive System",
    "question": "_______ hormone triggers ovulation, while _______ is painful menstruation.",
    "answers": [
      "LH",
      "dysmenorrhea"
    ],
    "explanation": "Luteinizing hormone triggers ovulation, while dysmenorrhea refers to painful periods."
  },
  {
    "id": 60,
    "type": "fill-in-the-blank",
    "system": "Reproductive System",
    "question": "_______ involves abnormal growth of endometrial tissue outside the uterus, while the _______ gland produces fluid that nourishes sperm.",
    "answers": [
      "Endometriosis",
      "prostate"
    ],
    "explanation": "Endometriosis is displaced endometrial tissue, while the prostate produces seminal fluid."
  },
  {
    "id": 61,
    "type": "fill-in-the-blank",
    "system": "Muscular System",
    "question": "The three types of muscle tissue are _______ (voluntary), _______ (heart), and _______ (involuntary in organs).",
    "answers": [
      "skeletal",
      "cardiac",
      "smooth"
    ],
    "explanation": "Skeletal muscle is voluntary, cardiac muscle is in the heart, and smooth muscle is in organs."
  },
  {
    "id": 62,
    "type": "fill-in-the-blank",
    "system": "Muscular System",
    "question": "The largest muscle in the human body is the _______, while _______ connect muscles to bones.",
    "answers": [
      "gluteus maximus",
      "tendons"
    ],
    "explanation": "The gluteus maximus is the largest muscle, and tendons attach muscles to bones."
  },
  {
    "id": 63,
    "type": "fill-in-the-blank",
    "system": "Muscular System",
    "question": "Muscle contraction occurs when _______ and _______ filaments slide past each other in a process requiring _______.",
    "answers": [
      "actin",
      "myosin",
      "ATP"
    ],
    "explanation": "Actin and myosin filaments slide together using ATP energy for muscle contraction."
  },
  {
    "id": 64,
    "type": "fill-in-the-blank",
    "system": "Muscular System",
    "question": "_______ dystrophy is a group of diseases causing progressive muscle weakness, while _______ is inflammation of a tendon.",
    "answers": [
      "Muscular",
      "tendinitis"
    ],
    "explanation": "Muscular dystrophy causes muscle degeneration, while tendinitis is tendon inflammation."
  },
  {
    "id": 65,
    "type": "fill-in-the-blank",
    "system": "Integumentary System",
    "question": "The skin has _______ main layers: the outer _______, the middle _______, and the deepest _______.",
    "answers": [
      "three",
      "epidermis",
      "dermis",
      "hypodermis"
    ],
    "explanation": "Skin has three layers - epidermis (outer), dermis (middle), and hypodermis (deepest)."
  },
  {
    "id": 66,
    "type": "fill-in-the-blank",
    "system": "Integumentary System",
    "question": "_______ cells produce the pigment _______ that gives skin its color and protects against UV radiation.",
    "answers": [
      "Melanocyte",
      "melanin"
    ],
    "explanation": "Melanocytes produce melanin pigment for skin color and UV protection."
  },
  {
    "id": 67,
    "type": "fill-in-the-blank",
    "system": "Integumentary System",
    "question": "_______ glands produce oil to lubricate skin, while _______ glands in the armpits produce thicker sweat.",
    "answers": [
      "Sebaceous",
      "apocrine"
    ],
    "explanation": "Sebaceous glands produce sebum (oil), while apocrine glands produce thicker sweat."
  },
  {
    "id": 68,
    "type": "fill-in-the-blank",
    "system": "Integumentary System",
    "question": "_______ is characterized by red, scaly patches due to rapid skin cell turnover, while _______ cell carcinoma is the most common skin cancer.",
    "answers": [
      "Psoriasis",
      "basal"
    ],
    "explanation": "Psoriasis causes scaly patches, while basal cell carcinoma is the most common skin cancer."
  },
  {
    "id": 69,
    "type": "fill-in-the-blank",
    "system": "Immune System",
    "question": "_______ cells produce antibodies, while _______ cells directly attack infected cells and coordinate immune responses.",
    "answers": [
      "B",
      "T"
    ],
    "explanation": "B cells produce antibodies, while T cells include helper and cytotoxic cells for immune responses."
  },
  {
    "id": 70,
    "type": "fill-in-the-blank",
    "system": "Immune System",
    "question": "The _______ is the largest lymphatic organ that filters blood, while _______ nodes filter lymph fluid.",
    "answers": [
      "spleen",
      "lymph"
    ],
    "explanation": "The spleen filters blood, while lymph nodes filter lymphatic fluid."
  },
  {
    "id": 71,
    "type": "fill-in-the-blank",
    "system": "Immune System",
    "question": "_______ diseases occur when the immune system attacks the body's own tissues, while _______ provides artificial active immunity.",
    "answers": [
      "Autoimmune",
      "vaccination"
    ],
    "explanation": "Autoimmune diseases involve self-attack, while vaccines provide artificial active immunity."
  },
  {
    "id": 72,
    "type": "fill-in-the-blank",
    "system": "Immune System",
    "question": "_______ are phagocytic cells that engulf pathogens, while T cells mature in the _______ gland.",
    "answers": [
      "Macrophages",
      "thymus"
    ],
    "explanation": "Macrophages are phagocytic immune cells, and T cells mature in the thymus."
  },
  {
    "id": 73,
    "type": "fill-in-the-blank",
    "system": "Sensory System",
    "question": "The _______ controls the amount of light entering the eye, while the _______ focuses light onto the retina.",
    "answers": [
      "iris",
      "lens"
    ],
    "explanation": "The iris controls pupil size, while the lens focuses light for clear vision."
  },
  {
    "id": 74,
    "type": "fill-in-the-blank",
    "system": "Sensory System",
    "question": "Sound is detected by hair cells in the _______ of the inner ear, while balance is maintained by the _______.",
    "answers": [
      "cochlea",
      "semicircular canals"
    ],
    "explanation": "The cochlea detects sound waves, while semicircular canals detect head movements for balance."
  },
  {
    "id": 75,
    "type": "fill-in-the-blank",
    "system": "Sensory System",
    "question": "_______ is increased pressure in the eye that can damage the optic nerve, while _______ involves clouding of the lens.",
    "answers": [
      "Glaucoma",
      "cataract"
    ],
    "explanation": "Glaucoma involves increased intraocular pressure, while cataracts are lens clouding."
  },
  {
    "id": 76,
    "type": "fill-in-the-blank",
    "system": "Sensory System",
    "question": "_______ receptors detect pain, while _______ receptors detect temperature changes.",
    "answers": [
      "Nociceptors",
      "thermoreceptors"
    ],
    "explanation": "Nociceptors detect harmful stimuli as pain, while thermoreceptors detect temperature."
  },
  {
    "id": 77,
    "type": "fill-in-the-blank",
    "system": "Sensory System",
    "question": "The sense of smell involves _______ receptors in the nasal cavity, while taste involves _______ on the tongue.",
    "answers": [
      "olfactory",
      "taste buds"
    ],
    "explanation": "Olfactory receptors detect odors, while taste buds detect chemical tastes."
  },
  {
    "id": 78,
    "type": "fill-in-the-blank",
    "system": "Sensory System",
    "question": "_______ is ringing in the ears, while _______ is the perception of spinning or dizziness.",
    "answers": [
      "Tinnitus",
      "vertigo"
    ],
    "explanation": "Tinnitus is phantom ear sounds, while vertigo is a spinning sensation."
  },
  {
    "id": 79,
    "type": "fill-in-the-blank",
    "system": "Sensory System",
    "question": "The _______ is the colored part of the eye, while the _______ is the clear front surface that helps focus light.",
    "answers": [
      "iris",
      "cornea"
    ],
    "explanation": "The iris gives eye color and controls light entry, while the cornea provides initial light focusing."
  },
    {
      "id": 81,
      "type": "theory",
      "system": "Respiratory System",
      "question": "Explain the complete mechanism of breathing, including the role of the diaphragm, intercostal muscles, and pressure changes during inspiration and expiration.",
      "key_points": [
        "Inspiration: Diaphragm contracts and moves downward",
        "External intercostal muscles contract, lifting ribs up and out",
        "Thoracic cavity expands, creating negative pressure",
        "Air flows from high to low pressure into lungs",
        "Expiration: Diaphragm relaxes and moves upward",
        "Intercostal muscles relax, ribs move down and in",
        "Thoracic cavity contracts, creating positive pressure",
        "Air flows out of lungs due to pressure gradient"
      ]
    },
    {
      "id": 82,
      "type": "theory",
      "system": "Respiratory System",
      "question": "Describe the structure and function of alveoli, and explain how gas exchange occurs at the alveolar-capillary membrane.",
      "key_points": [
        "Alveoli are tiny air sacs at the end of bronchioles",
        "Thin walls (one cell thick) for efficient gas exchange",
        "Surrounded by dense capillary networks",
        "Large surface area (about 70 square meters)",
        "Oxygen diffuses from alveoli into blood",
        "Carbon dioxide diffuses from blood into alveoli",
        "Surfactant reduces surface tension",
        "Gas exchange occurs by simple diffusion"
      ]
    },
    {
      "id": 83,
      "type": "theory",
      "system": "Respiratory System",
      "question": "Compare and contrast asthma, bronchitis, and pneumonia in terms of their causes, symptoms, and affected respiratory structures.",
      "key_points": [
        "Asthma: Chronic inflammatory condition, bronchospasm, wheezing",
        "Affects bronchi and bronchioles, triggered by allergens",
        "Bronchitis: Inflammation of bronchial tubes, mucus production",
        "Can be acute (infection) or chronic (smoking)",
        "Pneumonia: Infection/inflammation of alveoli, fluid accumulation",
        "Caused by bacteria, viruses, or fungi",
        "All cause breathing difficulty but affect different structures",
        "Treatment varies based on underlying cause"
      ]
    },
    {
      "id": 84,
      "type": "theory",
      "system": "Skeletal System",
      "question": "Explain the classification of joints based on movement (synarthrosis, amphiarthrosis, diarthrosis) and provide specific anatomical examples with their locations.",
      "key_points": [
        "Synarthrosis: Immovable joints, fibrous connections",
        "Examples: Skull sutures, teeth in sockets (gomphoses)",
        "Amphiarthrosis: Slightly movable, cartilaginous connections",
        "Examples: Intervertebral discs, pubic symphysis",
        "Diarthrosis: Freely movable, synovial joints",
        "Examples: Shoulder (ball-and-socket), knee (hinge)",
        "Joint mobility increases from synarthrosis to diarthrosis",
        "Structure determines function and movement capability"
      ]
    },
    {
      "id": 85,
      "type": "theory",
      "system": "Skeletal System",
      "question": "Describe the four types of bone shapes and give specific examples of each type, explaining their functional significance.",
      "key_points": [
        "Long bones: Length exceeds width, lever systems",
        "Examples: Femur, humerus, tibia, radius",
        "Short bones: Cube-shaped, shock absorption",
        "Examples: Carpals, tarsals, patella",
        "Flat bones: Thin, broad, protection and muscle attachment",
        "Examples: Skull bones, ribs, sternum, scapula",
        "Irregular bones: Complex shapes, specialized functions",
        "Examples: Vertebrae, sacrum, sphenoid, ethmoid"
      ]
    },
    {
      "id": 86,
      "type": "theory",
      "system": "Skeletal System",
      "question": "Explain the different types of fractures, their characteristics, and healing mechanisms.",
      "key_points": [
        "Simple (closed): Bone breaks but doesn't pierce skin",
        "Compound (open): Bone breaks through skin surface",
        "Greenstick: Incomplete fracture, common in children",
        "Comminuted: Bone shatters into multiple fragments",
        "Stress: Small cracks from repeated stress",
        "Pathological: Break due to underlying disease",
        "Healing involves hematoma, callus formation, remodeling",
        "Factors affecting healing: age, nutrition, blood supply"
      ]
    },
    {
      "id": 87,
      "type": "theory",
      "system": "Skeletal System",
      "question": "List and describe the major bones of the skull, including their anatomical positions and key features.",
      "key_points": [
        "Frontal: Forms forehead and upper eye sockets",
        "Parietal: Forms sides and top of skull (2 bones)",
        "Temporal: Contains ear structures, temporal lobes",
        "Occipital: Back of skull, foramen magnum",
        "Sphenoid: Central skull base, sella turcica",
        "Ethmoid: Between nasal cavity and brain",
        "Maxilla: Upper jaw, forms part of eye sockets",
        "Mandible: Lower jaw, only movable skull bone"
      ]
    },
    {
      "id": 88,
      "type": "theory",
      "system": "Skeletal System",
      "question": "Describe the complete composition of the 206 bones in the adult human skeleton, organized by body regions.",
      "key_points": [
        "Axial skeleton (80 bones): Skull (22), vertebrae (26), ribs (24), sternum (1), hyoid (1)",
        "Appendicular skeleton (126 bones): Arms and hands (60), legs and feet (60), pelvic girdle (4), pectoral girdle (2)",
        "Skull: 8 cranial + 14 facial bones",
        "Vertebrae: 7 cervical + 12 thoracic + 5 lumbar + sacrum + coccyx",
        "Each arm: 30 bones (humerus, radius, ulna, 8 carpals, 5 metacarpals, 14 phalanges)",
        "Each leg: 30 bones (femur, tibia, fibula, patella, 7 tarsals, 5 metatarsals, 14 phalanges)",
        "Ribs: 12 pairs (24 total)",
        "Total decreases from birth (270) due to fusion"
      ]
    },
    {
      "id": 89,
      "type": "theory",
      "system": "Cardiovascular System",
      "question": "Explain the complete pathway of blood circulation through the heart, including all chambers, valves, and major vessels.",
      "key_points": [
        "Deoxygenated blood enters right atrium via vena cava",
        "Blood flows through tricuspid valve to right ventricle",
        "Right ventricle pumps blood through pulmonary valve",
        "Blood travels via pulmonary artery to lungs",
        "Oxygenated blood returns via pulmonary veins to left atrium",
        "Blood flows through mitral valve to left ventricle",
        "Left ventricle pumps blood through aortic valve",
        "Blood travels via aorta to systemic circulation",
        "Cycle repeats with venous return to right atrium"
      ]
    },
    {
      "id": 90,
      "type": "theory",
      "system": "Cardiovascular System",
      "question": "Describe the composition and functions of blood, including all cellular components and plasma.",
      "key_points": [
        "Plasma (55%): Water, proteins, nutrients, waste products",
        "Red blood cells (45%): Contain hemoglobin, transport oxygen/CO2",
        "White blood cells (<1%): Immune defense, various types",
        "Platelets (<1%): Blood clotting, hemostasis",
        "Plasma proteins: Albumin, globulins, fibrinogen",
        "Transport function: Nutrients, hormones, waste",
        "Regulation: Temperature, pH, fluid balance",
        "Protection: Immunity, clotting mechanisms"
      ]
    },
    {
      "id": 91,
      "type": "theory",
      "system": "Cardiovascular System",
      "question": "Explain the cardiac cycle, including systole and diastole phases, and the role of electrical conduction system.",
      "key_points": [
        "Cardiac cycle: One complete heartbeat sequence",
        "Systole: Contraction phase, blood pumped out",
        "Diastole: Relaxation phase, chambers fill with blood",
        "SA node: Natural pacemaker, initiates heartbeat",
        "AV node: Delays impulse, allows atrial emptying",
        "Bundle of His and Purkinje fibers: Conduct impulse to ventricles",
        "Atrial systole: Atria contract, complete ventricular filling",
        "Ventricular systole: Ventricles contract, blood ejected"
      ]
    },
    {
      "id": 92,
      "type": "theory",
      "system": "Digestive System",
      "question": "Trace the complete pathway of food digestion from mouth to elimination, including all organs and their specific functions.",
      "key_points": [
        "Mouth: Mechanical breakdown, salivary amylase begins starch digestion",
        "Esophagus: Muscular tube, peristalsis moves food to stomach",
        "Stomach: Acid production, pepsin digests proteins, churning",
        "Small intestine: Major digestion and absorption site",
        "Pancreas: Digestive enzymes, bicarbonate neutralizes acid",
        "Liver: Bile production for fat emulsification",
        "Large intestine: Water absorption, waste formation",
        "Rectum and anus: Waste elimination"
      ]
    },
    {
      "id": 93,
      "type": "theory",
      "system": "Digestive System",
      "question": "Explain the roles of digestive enzymes, including their sources, substrates, and products.",
      "key_points": [
        "Salivary amylase: Mouth, breaks starch into maltose",
        "Pepsin: Stomach, breaks proteins into peptides",
        "Pancreatic enzymes: Trypsin, chymotrypsin (proteins)",
        "Pancreatic lipase: Breaks fats into fatty acids and glycerol",
        "Pancreatic amylase: Completes starch digestion",
        "Intestinal enzymes: Peptidases, disaccharidases",
        "Bile salts: Emulsify fats for lipase action",
        "pH specificity: Pepsin (acidic), pancreatic enzymes (alkaline)"
      ]
    },
    {
      "id": 94,
      "type": "theory",
      "system": "Digestive System",
      "question": "Compare and contrast GERD, peptic ulcers, and inflammatory bowel disease in terms of causes, symptoms, and treatment approaches.",
      "key_points": [
        "GERD: Acid reflux into esophagus, weakened lower esophageal sphincter",
        "Symptoms: Heartburn, chest pain, regurgitation",
        "Peptic ulcers: H. pylori bacteria or NSAIDs, stomach/duodenal erosion",
        "Symptoms: Burning pain, bleeding, perforation risk",
        "IBD: Crohn's disease and ulcerative colitis, autoimmune",
        "Symptoms: Abdominal pain, diarrhea, weight loss",
        "Treatments vary: Acid reducers, antibiotics, anti-inflammatories",
        "Lifestyle modifications important for all conditions"
      ]
    },
    {
      "id": 95,
      "type": "theory",
      "system": "Nervous System",
      "question": "Describe the structure and function of a neuron, including the process of action potential generation and transmission.",
      "key_points": [
        "Cell body: Contains nucleus and organelles",
        "Dendrites: Receive signals from other neurons",
        "Axon: Transmits signals away from cell body",
        "Synapse: Junction between neurons",
        "Resting potential: -70mV, maintained by sodium-potassium pump",
        "Action potential: Depolarization, repolarization, hyperpolarization",
        "All-or-nothing principle: Threshold must be reached",
        "Neurotransmitters: Chemical messengers at synapses"
      ]
    },
    {
      "id": 96,
      "type": "theory",
      "system": "Nervous System",
      "question": "Explain the organization of the nervous system, distinguishing between central and peripheral divisions and their subdivisions.",
      "key_points": [
        "Central Nervous System: Brain and spinal cord",
        "Brain divisions: Cerebrum, cerebellum, brainstem",
        "Spinal cord: Conducts signals, reflex center",
        "Peripheral Nervous System: All nerves outside CNS",
        "Somatic division: Voluntary control of skeletal muscles",
        "Autonomic division: Involuntary control of organs",
        "Sympathetic: Fight-or-flight responses",
        "Parasympathetic: Rest-and-digest responses"
      ]
    },
    {
      "id": 97,
      "type": "theory",
      "system": "Nervous System",
      "question": "Compare and contrast Parkinson's disease and Alzheimer's disease in terms of pathophysiology, symptoms, and progression.",
      "key_points": [
        "Parkinson's: Loss of dopamine-producing neurons in substantia nigra",
        "Symptoms: Tremor, rigidity, bradykinesia, postural instability",
        "Alzheimer's: Accumulation of amyloid plaques and tau tangles",
        "Symptoms: Memory loss, cognitive decline, behavioral changes",
        "Parkinson's: Primarily motor symptoms initially",
        "Alzheimer's: Primarily cognitive symptoms initially",
        "Both are progressive neurodegenerative diseases",
        "Different brain regions and neurotransmitters affected"
      ]
    },
    {
      "id": 98,
      "type": "theory",
      "system": "Endocrine System",
      "question": "Explain the concept of feedback mechanisms in hormone regulation, using specific examples of negative and positive feedback.",
      "key_points": [
        "Negative feedback: Most common, maintains homeostasis",
        "Example: Insulin-glucose regulation, thyroid hormone control",
        "High glucose stimulates insulin release",
        "Insulin lowers glucose, reducing insulin release",
        "Positive feedback: Amplifies response, less common",
        "Example: Oxytocin during childbirth",
        "Contractions stimulate more oxytocin release",
        "Process continues until birth occurs"
      ]
    },
    {
      "id": 99,
      "type": "theory",
      "system": "Endocrine System",
      "question": "Describe the hypothalamic-pituitary axis and its control over other endocrine glands.",
      "key_points": [
        "Hypothalamus: Neural and endocrine functions",
        "Produces releasing and inhibiting hormones",
        "Anterior pituitary: Adenohypophysis, produces tropic hormones",
        "Posterior pituitary: Neurohypophysis, stores hypothalamic hormones",
        "Tropic hormones: TSH, ACTH, FSH, LH, GH, prolactin",
        "Target glands: Thyroid, adrenals, gonads",
        "Feedback loops regulate hormone levels",
        "Master control system for endocrine function"
      ]
    },
    {
      "id": 100,
      "type": "theory",
      "system": "Endocrine System",
      "question": "Explain diabetes mellitus, including Type 1 and Type 2 differences, complications, and management strategies.",
      "key_points": [
        "Type 1: Autoimmune destruction of beta cells",
        "Insulin deficiency, usually childhood onset",
        "Type 2: Insulin resistance, relative insulin deficiency",
        "Associated with obesity, adult onset",
        "Complications: Cardiovascular, kidney, eye, nerve damage",
        "Management: Diet, exercise, medication, monitoring",
        "Type 1 requires insulin injections",
        "Type 2 may use oral medications, lifestyle changes"
      ]
    },
    {
      "id": 101,
      "type": "theory",
      "system": "Urinary System",
      "question": "Describe the process of urine formation in the nephron, including filtration, reabsorption, and secretion.",
      "key_points": [
        "Glomerular filtration: Blood pressure forces fluid into Bowman's capsule",
        "Filtrate contains water, glucose, amino acids, waste products",
        "Tubular reabsorption: Recovery of useful substances",
        "Proximal tubule: Glucose, amino acids, most water and sodium",
        "Loop of Henle: Water and sodium reabsorption",
        "Distal tubule: Fine-tuning of sodium and potassium",
        "Tubular secretion: Active transport of wastes into urine",
        "Final urine: Concentrated waste for elimination"
      ]
    },
    {
      "id": 102,
      "type": "theory",
      "system": "Urinary System",
      "question": "Explain the hormonal regulation of kidney function, including the roles of ADH, aldosterone, and atrial natriuretic peptide.",
      "key_points": [
        "ADH (antidiuretic hormone): Increases water reabsorption",
        "Released when blood osmolarity increases",
        "Acts on collecting duct to concentrate urine",
        "Aldosterone: Increases sodium reabsorption",
        "Released when blood pressure/volume decreases",
        "Acts on distal tubule and collecting duct",
        "ANP (atrial natriuretic peptide): Promotes sodium excretion",
        "Released when blood volume increases"
      ]
    },
    {
      "id": 103,
      "type": "theory",
      "system": "Reproductive System",
      "question": "Explain the menstrual cycle, including hormonal changes and ovarian/uterine events.",
      "key_points": [
        "Follicular phase: FSH stimulates follicle development",
        "Estrogen levels rise, endometrium proliferates",
        "Ovulation: LH surge triggers egg release (day 14)",
        "Luteal phase: Corpus luteum produces progesterone",
        "Endometrium becomes secretory, prepared for implantation",
        "If no pregnancy: Corpus luteum degenerates",
        "Hormone levels drop, menstruation occurs",
        "Cycle typically 28 days, controlled by hypothalamic-pituitary-ovarian axis"
      ]
    },
    {
      "id": 104,
      "type": "theory",
      "system": "Reproductive System",
      "question": "Describe the process of spermatogenesis and the pathway of sperm from production to ejaculation.",
      "key_points": [
        "Spermatogenesis occurs in seminiferous tubules",
        "Process takes about 74 days",
        "Stages: Mitosis, meiosis, differentiation",
        "Sperm pathway: Seminiferous tubules → epididymis",
        "Epididymis: Sperm maturation and storage",
        "Vas deferens: Transport during ejaculation",
        "Seminal vesicles and prostate add fluids",
        "Urethra: Final pathway for sperm exit"
      ]
    },
    {
      "id": 105,
      "type": "theory",
      "system": "Muscular System",
      "question": "Explain the sliding filament theory of muscle contraction, including the roles of actin, myosin, and regulatory proteins.",
      "key_points": [
        "Muscle contraction: Actin and myosin filaments slide past each other",
        "Myosin heads bind to actin forming cross-bridges",
        "ATP provides energy for myosin head movement",
        "Calcium ions regulate contraction",
        "Tropomyosin blocks binding sites on actin",
        "Troponin complex responds to calcium",
        "Calcium release triggers contraction",
        "Calcium removal causes muscle relaxation"
      ]
    },
    {
      "id": 106,
      "type": "theory",
      "system": "Muscular System",
      "question": "Compare and contrast the three types of muscle tissue in terms of structure, function, and control mechanisms.",
      "key_points": [
        "Skeletal muscle: Striated, multinucleated, voluntary",
        "Attaches to bones, produces movement",
        "Cardiac muscle: Striated, single nucleus, involuntary",
        "Found only in heart, rhythmic contractions",
        "Smooth muscle: Non-striated, single nucleus, involuntary",
        "Found in organs, blood vessels, slow contractions",
        "All use actin-myosin interaction",
        "Different regulatory mechanisms and speed"
      ]
    },
    {
      "id": 107,
      "type": "theory",
      "system": "Integumentary System",
      "question": "Describe the structure and functions of the skin, including all three layers and their specialized structures.",
      "key_points": [
        "Epidermis: Outermost layer, stratified squamous epithelium",
        "Contains keratinocytes, melanocytes, protective barrier",
        "Dermis: Middle layer, connective tissue",
        "Contains blood vessels, nerves, hair follicles, glands",
        "Hypodermis: Deepest layer, adipose and connective tissue",
        "Functions: Protection, temperature regulation, sensation",
        "Vitamin D synthesis, immune defense",
        "Specialized structures: Hair, nails, sweat glands, sebaceous glands"
      ]
    },
    {
      "id": 108,
      "type": "theory",
      "system": "Integumentary System",
      "question": "Explain the different types of skin cancer, their characteristics, risk factors, and prevention strategies.",
      "key_points": [
        "Basal cell carcinoma: Most common, rarely metastasizes",
        "Appears as pearly or waxy bumps",
        "Squamous cell carcinoma: Can metastasize, scaly patches",
        "Melanoma: Most dangerous, can spread rapidly",
        "Irregular moles, color changes, asymmetry",
        "Risk factors: UV exposure, fair skin, family history",
        "Prevention: Sunscreen, protective clothing, shade",
        "Early detection: Regular skin examinations"
      ]
    },
    {
      "id": 109,
      "type": "theory",
      "system": "Immune System",
      "question": "Explain the difference between innate and adaptive immunity, including their characteristics and components.",
      "key_points": [
        "Innate immunity: First line of defense, non-specific",
        "Components: Skin, mucous membranes, phagocytes, complement",
        "Rapid response, no memory formation",
        "Adaptive immunity: Specific, acquired responses",
        "Components: B cells, T cells, antibodies",
        "Slower initial response, but creates immunological memory",
        "Humoral immunity: B cells and antibodies",
        "Cell-mediated immunity: T cells and cellular responses"
      ]
    },
    {
      "id": 110,
      "type": "theory",
      "system": "Immune System",
      "question": "Describe the structure and function of the lymphatic system and its role in immunity.",
      "key_points": [
        "Lymphatic vessels: Return excess fluid to circulation",
        "Lymph nodes: Filter lymph, activate immune responses",
        "Spleen: Filters blood, removes old red blood cells",
        "Thymus: T cell maturation and selection",
        "Tonsils: Protect against respiratory/digestive pathogens",
        "Lymphocytes: B cells and T cells",
        "Functions: Immunity, fluid balance, fat absorption",
        "Works closely with cardiovascular system"
      ]
    },
    {
      "id": 111,
      "type": "theory",
      "system": "Sensory System",
      "question": "Explain the process of vision, from light entering the eye to image interpretation in the brain.",
      "key_points": [
        "Light enters through cornea, pupil controlled by iris",
        "Lens focuses light onto retina",
        "Photoreceptors: Rods (light/dark) and cones (color)",
        "Phototransduction converts light to electrical signals",
        "Bipolar and ganglion cells process signals",
        "Optic nerve carries signals to brain",
        "Visual cortex interprets images",
        "Binocular vision provides depth perception"
      ]
    },
    {
      "id": 112,
      "type": "theory",
      "system": "Sensory System",
      "question": "Describe the anatomy of the ear and explain how sound waves are converted to neural signals.",
      "key_points": [
        "Outer ear: Pinna and ear canal collect sound",
        "Middle ear: Eardrum and ossicles amplify vibrations",
        "Inner ear: Cochlea contains hair cells",
        "Sound waves cause eardrum vibration",
        "Ossicles (malleus, incus, stapes) amplify movement",
        "Oval window transmits vibrations to cochlear fluid",
        "Hair cells bend, generating electrical signals",
        "Auditory nerve carries signals to brain"
      ]
    },
    {
      "id": 113,
      "type": "theory",
      "system": "Sensory System",
      "question": "Explain how the vestibular system maintains balance and spatial orientation.",
      "key_points": [
        "Semicircular canals: Detect rotational movements",
        "Three canals oriented in different planes",
        "Utricle and saccule: Detect linear acceleration",
        "Otoliths (calcium carbonate crystals) provide weight",
        "Hair cells detect fluid movement",
        "Vestibular nerve carries balance information",
        "Brain integrates with visual and proprioceptive input",
        "Maintains equilibrium and spatial awareness"
      ]
    },
    {
      "id": 114,
      "type": "theory",
      "system": "Sensory System",
      "question": "Describe the five basic taste sensations and explain how taste and smell work together in flavor perception.",
      "key_points": [
        "Five tastes: Sweet, sour, salty, bitter, umami",
        "Taste buds contain chemoreceptors",
        "Different regions of tongue sensitive to different tastes",
        "Olfactory receptors in nasal cavity detect odors",
        "Smell contributes significantly to flavor",
        "Retronasal olfaction during eating",
        "Brain integrates taste and smell information",
        "Loss of smell affects taste perception"
      ]
    },
    {
      "id": 115,
      "type": "theory",
      "system": "Sensory System",
      "question": "Explain common vision disorders including myopia, hyperopia, astigmatism, and presbyopia.",
      "key_points": [
        "Myopia (nearsightedness): Distant objects blurry",
        "Eyeball too long or cornea too curved",
        "Hyperopia (farsightedness): Near objects blurry",
        "Eyeball too short or insufficient lens curvature",
        "Astigmatism: Irregular cornea shape, distorted vision",
        "Presbyopia: Age-related loss of lens flexibility",
        "Corrected with glasses, contacts, or surgery",
        "Refractive errors affect light focusing"
      ]
    },
    {
      "id": 116,
      "type": "theory",
      "system": "Sensory System",
      "question": "Describe glaucoma and cataracts, including their causes, symptoms, and treatment options.",
      "key_points": [
        "Glaucoma: Increased intraocular pressure",
        "Damages optic nerve, can cause blindness",
        "Often asymptomatic until advanced",
        "Treatment: Eye drops, surgery to reduce pressure",
        "Cataracts: Clouding of lens",
        "Age-related protein changes most common",
        "Symptoms: Blurred vision, light sensitivity",
        "Treatment: Surgical lens replacement"
      ]
    },
    {
      "id": 117,
      "type": "theory",
      "system": "Sensory System",
      "question": "Explain the different types of sensory receptors and what stimuli they detect.",
      "key_points": [
        "Mechanoreceptors: Detect mechanical pressure, touch",
        "Examples: Pacinian corpuscles, Meissner corpuscles",
        "Thermoreceptors: Detect temperature changes",
        "Nociceptors: Detect harmful stimuli, pain",
        "Chemoreceptors: Detect chemical substances",
        "Examples: Taste buds, olfactory receptors",
        "Photoreceptors: Detect light (rods and cones)",
        "Proprioceptors: Detect body position and movement"
      ]
    },
    {
      "id": 118,
      "type": "theory",
      "system": "Sensory System",
      "question": "Describe hearing loss types, causes, and treatment options.",
      "key_points": [
        "Conductive hearing loss: Problem in outer/middle ear",
        "Causes: Ear wax, infection, damaged ossicles",
        "Sensorineural hearing loss: Inner ear or nerve damage",
        "Causes: Age, noise exposure, medications",
        "Mixed hearing loss: Combination of both types",
        "Treatments: Hearing aids, cochlear implants",
        "Surgery for some conductive losses",
        "Prevention: Protect from loud noise"
      ]
    },
    {
      "id": 119,
      "type": "theory",
      "system": "Sensory System",
      "question": "Explain the concept of sensory adaptation and provide examples from different sensory systems.",
      "key_points": [
        "Sensory adaptation: Decreased response to constant stimulus",
        "Allows detection of changes in environment",
        "Vision: Adaptation to light and dark",
        "Touch: Decreased awareness of clothing",
        "Smell: Olfactory fatigue to persistent odors",
        "Taste: Adaptation to flavors during eating",
        "Not all receptors adapt equally",
        "Pain receptors show little adaptation"
      ]
    },
    {
      "id": 120,
      "type": "theory",
      "system": "Sensory System",
      "question": "Describe the pathway of smell from odor detection to brain interpretation, and explain why smell is closely linked to memory.",
      "key_points": [
        "Odorant molecules dissolve in nasal mucus",
        "Bind to olfactory receptor neurons",
        "Axons pass through cribriform plate",
        "Synapse in olfactory bulb glomeruli",
        "Mitral cells project to olfactory cortex",
        "Direct connection to limbic system",
        "Limbic system processes emotions and memory",
        "Explains strong smell-memory associations"
      ]
    },
      {
      "id": 1,
      "system": "Respiratory System",
      "question": "Which of the following is the primary organ of respiration?",
      "options": ["Heart", "Lungs", "Liver", "Kidneys"],
      "correct_answer": 1,
      "explanation": "The lungs are the primary organs where gas exchange occurs during respiration."
    },
    {
      "id": 2,
      "system": "Respiratory System",
      "question": "What is the main function of alveoli?",
      "options": ["Filter air", "Gas exchange", "Produce mucus", "Warm air"],
      "correct_answer": 1,
      "explanation": "Alveoli are tiny air sacs where oxygen and carbon dioxide exchange occurs."
    },
    {
      "id": 3,
      "system": "Respiratory System",
      "question": "Which muscle is primarily responsible for inspiration (breathing in)?",
      "options": ["Intercostal muscles", "Diaphragm", "Abdominal muscles", "Pectoral muscles"],
      "correct_answer": 1,
      "explanation": "The diaphragm contracts and moves downward during inspiration, creating negative pressure."
    },
    {
      "id": 4,
      "system": "Respiratory System",
      "question": "What respiratory disease is characterized by inflammation of the bronchi?",
      "options": ["Pneumonia", "Asthma", "Bronchitis", "Tuberculosis"],
      "correct_answer": 2,
      "explanation": "Bronchitis is the inflammation of the lining of the bronchial tubes."
    },
    {
      "id": 5,
      "system": "Respiratory System",
      "question": "During expiration, the diaphragm:",
      "options": ["Contracts and moves down", "Relaxes and moves up", "Remains stationary", "Contracts and moves up"],
      "correct_answer": 1,
      "explanation": "During expiration, the diaphragm relaxes and moves upward, reducing lung volume."
    },
    {
      "id": 6,
      "system": "Respiratory System",
      "question": "Which structure prevents food from entering the trachea?",
      "options": ["Epiglottis", "Larynx", "Pharynx", "Esophagus"],
      "correct_answer": 0,
      "explanation": "The epiglottis acts as a lid that covers the trachea during swallowing."
    },
    {
      "id": 7,
      "system": "Respiratory System",
      "question": "What is the medical term for difficulty breathing?",
      "options": ["Apnea", "Dyspnea", "Tachypnea", "Bradypnea"],
      "correct_answer": 1,
      "explanation": "Dyspnea refers to difficulty or labored breathing."
    },
    {
      "id": 8,
      "system": "Respiratory System",
      "question": "Which respiratory organ contains the vocal cords?",
      "options": ["Trachea", "Larynx", "Pharynx", "Bronchi"],
      "correct_answer": 1,
      "explanation": "The larynx contains the vocal cords and is responsible for voice production."
    },

    // SKELETAL SYSTEM (12 questions)
    {
      "id": 9,
      "system": "Skeletal System",
      "question": "How many bones are in the adult human skeletal system?",
      "options": ["196", "206", "216", "226"],
      "correct_answer": 1,
      "explanation": "The adult human skeleton typically has 206 bones."
    },
    {
      "id": 10,
      "system": "Skeletal System",
      "question": "Which type of bone is the femur classified as?",
      "options": ["Short bone", "Flat bone", "Long bone", "Irregular bone"],
      "correct_answer": 2,
      "explanation": "The femur is classified as a long bone, characterized by its length exceeding its width."
    },
    {
      "id": 11,
      "system": "Skeletal System",
      "question": "What type of fracture is characterized by the bone breaking through the skin?",
      "options": ["Simple fracture", "Compound fracture", "Greenstick fracture", "Stress fracture"],
      "correct_answer": 1,
      "explanation": "A compound (open) fracture occurs when the broken bone pierces through the skin."
    },
    {
      "id": 12,
      "system": "Skeletal System",
      "question": "Which bone is commonly known as the kneecap?",
      "options": ["Tibia", "Fibula", "Patella", "Femur"],
      "correct_answer": 2,
      "explanation": "The patella is the scientific name for the kneecap."
    },
    {
      "id": 13,
      "system": "Skeletal System",
      "question": "What type of joint is a synovial joint?",
      "options": ["Immovable joint", "Slightly movable joint", "Freely movable joint", "Fixed joint"],
      "correct_answer": 2,
      "explanation": "Synovial joints are freely movable joints (diarthroses)."
    },
    {
      "id": 14,
      "system": "Skeletal System",
      "question": "Which joint type is classified as synarthrosis?",
      "options": ["Shoulder joint", "Knee joint", "Skull sutures", "Hip joint"],
      "correct_answer": 2,
      "explanation": "Synarthroses are immovable joints, like the sutures in the skull."
    },
    {
      "id": 15,
      "system": "Skeletal System",
      "question": "How many ribs does a human typically have?",
      "options": ["22", "24", "26", "28"],
      "correct_answer": 1,
      "explanation": "Humans typically have 24 ribs (12 pairs)."
    },
    {
      "id": 16,
      "system": "Skeletal System",
      "question": "Which bone forms the forehead?",
      "options": ["Parietal", "Temporal", "Frontal", "Occipital"],
      "correct_answer": 2,
      "explanation": "The frontal bone forms the forehead and the upper part of the eye sockets."
    },
    {
      "id": 17,
      "system": "Skeletal System",
      "question": "What type of fracture is incomplete and commonly seen in children?",
      "options": ["Compound fracture", "Simple fracture", "Greenstick fracture", "Comminuted fracture"],
      "correct_answer": 2,
      "explanation": "Greenstick fractures are incomplete fractures common in children due to their flexible bones."
    },
    {
      "id": 18,
      "system": "Skeletal System",
      "question": "Which bones make up the shoulder blade?",
      "options": ["Clavicle", "Scapula", "Humerus", "Sternum"],
      "correct_answer": 1,
      "explanation": "The scapula is the scientific name for the shoulder blade."
    },
    {
      "id": 19,
      "system": "Skeletal System",
      "question": "What is an example of a flat bone?",
      "options": ["Femur", "Skull bones", "Vertebrae", "Phalanges"],
      "correct_answer": 1,
      "explanation": "Skull bones are examples of flat bones, which protect organs and provide muscle attachment."
    },
    {
      "id": 20,
      "system": "Skeletal System",
      "question": "The joint between the skull bones is an example of:",
      "options": ["Diarthrosis", "Amphiarthrosis", "Synarthrosis", "Synovial joint"],
      "correct_answer": 2,
      "explanation": "Skull sutures are synarthroses (immovable joints)."
    },

    // CARDIOVASCULAR SYSTEM (8 questions)
    {
      "id": 21,
      "system": "Cardiovascular System",
      "question": "How many chambers does the human heart have?",
      "options": ["2", "3", "4", "5"],
      "correct_answer": 2,
      "explanation": "The human heart has four chambers: two atria and two ventricles."
    },
    {
      "id": 22,
      "system": "Cardiovascular System",
      "question": "Which blood vessel carries oxygenated blood from the lungs to the heart?",
      "options": ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"],
      "correct_answer": 1,
      "explanation": "Pulmonary veins carry oxygenated blood from the lungs to the left atrium."
    },
    {
      "id": 23,
      "system": "Cardiovascular System",
      "question": "What is the main function of red blood cells?",
      "options": ["Fight infection", "Clot blood", "Transport oxygen", "Produce hormones"],
      "correct_answer": 2,
      "explanation": "Red blood cells contain hemoglobin which transports oxygen throughout the body."
    },
    {
      "id": 24,
      "system": "Cardiovascular System",
      "question": "Which heart valve is located between the left atrium and left ventricle?",
      "options": ["Tricuspid valve", "Pulmonary valve", "Mitral valve", "Aortic valve"],
      "correct_answer": 2,
      "explanation": "The mitral (bicuspid) valve is located between the left atrium and left ventricle."
    },
    {
      "id": 25,
      "system": "Cardiovascular System",
      "question": "What cardiovascular disease involves the hardening of arteries?",
      "options": ["Hypertension", "Atherosclerosis", "Arrhythmia", "Heart failure"],
      "correct_answer": 1,
      "explanation": "Atherosclerosis is the hardening and narrowing of arteries due to plaque buildup."
    },
    {
      "id": 26,
      "system": "Cardiovascular System",
      "question": "Which blood component is responsible for clotting?",
      "options": ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
      "correct_answer": 2,
      "explanation": "Platelets are responsible for blood clotting and preventing excessive bleeding."
    },
    {
      "id": 27,
      "system": "Cardiovascular System",
      "question": "The largest artery in the human body is the:",
      "options": ["Pulmonary artery", "Carotid artery", "Aorta", "Coronary artery"],
      "correct_answer": 2,
      "explanation": "The aorta is the largest artery, carrying oxygenated blood from the heart to the body."
    },
    {
      "id": 28,
      "system": "Cardiovascular System",
      "question": "What is the normal resting heart rate for adults?",
      "options": ["40-60 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"],
      "correct_answer": 1,
      "explanation": "The normal resting heart rate for adults is 60-100 beats per minute."
    },

    // DIGESTIVE SYSTEM (8 questions)
    {
      "id": 29,
      "system": "Digestive System",
      "question": "Which organ produces bile?",
      "options": ["Pancreas", "Liver", "Gallbladder", "Stomach"],
      "correct_answer": 1,
      "explanation": "The liver produces bile, which helps digest fats."
    },
    {
      "id": 30,
      "system": "Digestive System",
      "question": "What is the main function of the small intestine?",
      "options": ["Store bile", "Absorb nutrients", "Produce acid", "Store waste"],
      "correct_answer": 1,
      "explanation": "The small intestine is the primary site for nutrient absorption."
    },
    {
      "id": 31,
      "system": "Digestive System",
      "question": "Which enzyme breaks down proteins in the stomach?",
      "options": ["Amylase", "Lipase", "Pepsin", "Trypsin"],
      "correct_answer": 2,
      "explanation": "Pepsin is the enzyme that breaks down proteins in the acidic stomach environment."
    },
    {
      "id": 32,
      "system": "Digestive System",
      "question": "The longest part of the digestive tract is the:",
      "options": ["Esophagus", "Stomach", "Small intestine", "Large intestine"],
      "correct_answer": 2,
      "explanation": "The small intestine is about 20 feet long, making it the longest part of the digestive tract."
    },
    {
      "id": 33,
      "system": "Digestive System",
      "question": "Which digestive disorder is characterized by stomach acid backing up into the esophagus?",
      "options": ["Ulcer", "GERD", "Appendicitis", "Crohn's disease"],
      "correct_answer": 1,
      "explanation": "GERD (Gastroesophageal Reflux Disease) occurs when stomach acid flows back into the esophagus."
    },
    {
      "id": 34,
      "system": "Digestive System",
      "question": "What is the function of the gallbladder?",
      "options": ["Produce bile", "Store bile", "Digest proteins", "Absorb vitamins"],
      "correct_answer": 1,
      "explanation": "The gallbladder stores and concentrates bile produced by the liver."
    },
    {
      "id": 35,
      "system": "Digestive System",
      "question": "Which organ is both part of the digestive and endocrine systems?",
      "options": ["Liver", "Stomach", "Pancreas", "Spleen"],
      "correct_answer": 2,
      "explanation": "The pancreas produces digestive enzymes and hormones like insulin."
    },
    {
      "id": 36,
      "system": "Digestive System",
      "question": "The appendix is attached to which part of the large intestine?",
      "options": ["Cecum", "Colon", "Rectum", "Sigmoid"],
      "correct_answer": 0,
      "explanation": "The appendix is a small tube attached to the cecum, the first part of the large intestine."
    },

    // NERVOUS SYSTEM (8 questions)
    {
      "id": 37,
      "system": "Nervous System",
      "question": "Which part of the brain controls balance and coordination?",
      "options": ["Cerebrum", "Cerebellum", "Brainstem", "Thalamus"],
      "correct_answer": 1,
      "explanation": "The cerebellum is responsible for balance, coordination, and fine motor control."
    },
    {
      "id": 38,
      "system": "Nervous System",
      "question": "What is the functional unit of the nervous system?",
      "options": ["Synapse", "Neuron", "Dendrite", "Axon"],
      "correct_answer": 1,
      "explanation": "The neuron is the basic functional unit of the nervous system."
    },
    {
      "id": 39,
      "system": "Nervous System",
      "question": "Which cranial nerve is responsible for vision?",
      "options": ["Optic nerve", "Oculomotor nerve", "Trigeminal nerve", "Facial nerve"],
      "correct_answer": 0,
      "explanation": "The optic nerve (cranial nerve II) carries visual information from the eye to the brain."
    },
    {
      "id": 40,
      "system": "Nervous System",
      "question": "What disease is characterized by the progressive loss of memory and cognitive function?",
      "options": ["Parkinson's disease", "Multiple sclerosis", "Alzheimer's disease", "Epilepsy"],
      "correct_answer": 2,
      "explanation": "Alzheimer's disease is a progressive neurodegenerative disorder affecting memory and cognition."
    },
    {
      "id": 41,
      "system": "Nervous System",
      "question": "The spinal cord is part of the:",
      "options": ["Peripheral nervous system", "Central nervous system", "Autonomic nervous system", "Somatic nervous system"],
      "correct_answer": 1,
      "explanation": "The spinal cord, along with the brain, forms the central nervous system."
    },
    {
      "id": 42,
      "system": "Nervous System",
      "question": "Which neurotransmitter is associated with Parkinson's disease?",
      "options": ["Serotonin", "Dopamine", "Acetylcholine", "GABA"],
      "correct_answer": 1,
      "explanation": "Parkinson's disease is characterized by the loss of dopamine-producing neurons."
    },
    {
      "id": 43,
      "system": "Nervous System",
      "question": "The blood-brain barrier protects the brain from:",
      "options": ["Physical trauma", "Harmful substances", "Temperature changes", "Light exposure"],
      "correct_answer": 1,
      "explanation": "The blood-brain barrier selectively allows substances to pass, protecting the brain from toxins."
    },
    {
      "id": 44,
      "system": "Nervous System",
      "question": "Which part of the brain regulates body temperature?",
      "options": ["Cerebrum", "Cerebellum", "Hypothalamus", "Medulla"],
      "correct_answer": 2,
      "explanation": "The hypothalamus regulates body temperature, hunger, thirst, and other homeostatic functions."
    },

    // ENDOCRINE SYSTEM (8 questions)
    {
      "id": 45,
      "system": "Endocrine System",
      "question": "Which gland is known as the 'master gland'?",
      "options": ["Thyroid", "Adrenal", "Pituitary", "Pancreas"],
      "correct_answer": 2,
      "explanation": "The pituitary gland controls other endocrine glands and is called the master gland."
    },
    {
      "id": 46,
      "system": "Endocrine System",
      "question": "Which hormone regulates blood sugar levels?",
      "options": ["Thyroxine", "Insulin", "Cortisol", "Growth hormone"],
      "correct_answer": 1,
      "explanation": "Insulin regulates blood glucose levels by facilitating cellular glucose uptake."
    },
    {
      "id": 47,
      "system": "Endocrine System",
      "question": "What condition results from insufficient insulin production?",
      "options": ["Hypothyroidism", "Diabetes mellitus", "Cushing's syndrome", "Addison's disease"],
      "correct_answer": 1,
      "explanation": "Diabetes mellitus results from insufficient insulin production or insulin resistance."
    },
    {
      "id": 48,
      "system": "Endocrine System",
      "question": "Which gland produces adrenaline (epinephrine)?",
      "options": ["Thyroid", "Adrenal", "Parathyroid", "Pineal"],
      "correct_answer": 1,
      "explanation": "The adrenal glands produce adrenaline, which prepares the body for fight-or-flight responses."
    },
    {
      "id": 49,
      "system": "Endocrine System",
      "question": "The thyroid gland is located in the:",
      "options": ["Chest", "Abdomen", "Neck", "Head"],
      "correct_answer": 2,
      "explanation": "The thyroid gland is located in the front of the neck, below the Adam's apple."
    },
    {
      "id": 50,
      "system": "Endocrine System",
      "question": "Which hormone is responsible for the development of secondary sexual characteristics in males?",
      "options": ["Estrogen", "Progesterone", "Testosterone", "Prolactin"],
      "correct_answer": 2,
      "explanation": "Testosterone is the primary male sex hormone responsible for male characteristics."
    },
    {
      "id": 51,
      "system": "Endocrine System",
      "question": "What condition results from excessive growth hormone in adults?",
      "options": ["Gigantism", "Acromegaly", "Dwarfism", "Cretinism"],
      "correct_answer": 1,
      "explanation": "Acromegaly results from excess growth hormone in adults, causing enlarged features."
    },
    {
      "id": 52,
      "system": "Endocrine System",
      "question": "Which gland regulates calcium levels in the blood?",
      "options": ["Thyroid", "Parathyroid", "Adrenal", "Pancreas"],
      "correct_answer": 1,
      "explanation": "The parathyroid glands produce parathyroid hormone, which regulates calcium levels."
    },

    // URINARY SYSTEM (8 questions)
    {
      "id": 53,
      "system": "Urinary System",
      "question": "What is the primary function of the kidneys?",
      "options": ["Produce hormones", "Filter blood", "Store urine", "Regulate temperature"],
      "correct_answer": 1,
      "explanation": "The kidneys filter waste products from the blood to form urine."
    },
    {
      "id": 54,
      "system": "Urinary System",
      "question": "How many kidneys does a normal human have?",
      "options": ["1", "2", "3", "4"],
      "correct_answer": 1,
      "explanation": "Humans normally have two kidneys, one on each side of the spine."
    },
    {
      "id": 55,
      "system": "Urinary System",
      "question": "Which structure connects the kidney to the bladder?",
      "options": ["Urethra", "Ureter", "Renal vein", "Renal artery"],
      "correct_answer": 1,
      "explanation": "The ureter is the tube that carries urine from the kidney to the bladder."
    },
    {
      "id": 56,
      "system": "Urinary System",
      "question": "What is the functional unit of the kidney?",
      "options": ["Glomerulus", "Nephron", "Tubule", "Calyx"],
      "correct_answer": 1,
      "explanation": "The nephron is the functional unit of the kidney where filtration occurs."
    },
    {
      "id": 57,
      "system": "Urinary System",
      "question": "Which urinary disorder is characterized by kidney stones?",
      "options": ["Nephritis", "Nephrolithiasis", "Cystitis", "Pyelonephritis"],
      "correct_answer": 1,
      "explanation": "Nephrolithiasis is the medical term for kidney stone formation."
    },
    {
      "id": 58,
      "system": "Urinary System",
      "question": "What hormone regulates water reabsorption in the kidneys?",
      "options": ["Insulin", "ADH", "Aldosterone", "Cortisol"],
      "correct_answer": 1,
      "explanation": "ADH (antidiuretic hormone) regulates water reabsorption in the kidney tubules."
    },
    {
      "id": 59,
      "system": "Urinary System",
      "question": "The bladder can typically hold how much urine?",
      "options": ["100-200 mL", "300-500 mL", "600-800 mL", "900-1000 mL"],
      "correct_answer": 1,
      "explanation": "The bladder can comfortably hold 300-500 mL of urine."
    },
    {
      "id": 60,
      "system": "Urinary System",
      "question": "Which condition involves inflammation of the bladder?",
      "options": ["Nephritis", "Urethritis", "Cystitis", "Pyelonephritis"],
      "correct_answer": 2,
      "explanation": "Cystitis is inflammation of the bladder, often caused by bacterial infection."
    },

    // REPRODUCTIVE SYSTEM (8 questions)
    {
      "id": 61,
      "system": "Reproductive System",
      "question": "Which organ produces eggs in females?",
      "options": ["Uterus", "Ovaries", "Fallopian tubes", "Cervix"],
      "correct_answer": 1,
      "explanation": "The ovaries produce eggs (ova) and female sex hormones."
    },
    {
      "id": 62,
      "system": "Reproductive System",
      "question": "Where does fertilization typically occur?",
      "options": ["Uterus", "Ovary", "Fallopian tube", "Cervix"],
      "correct_answer": 2,
      "explanation": "Fertilization typically occurs in the fallopian tubes."
    },
    {
      "id": 63,
      "system": "Reproductive System",
      "question": "Which male organ produces sperm?",
      "options": ["Penis", "Prostate", "Testes", "Epididymis"],
      "correct_answer": 2,
      "explanation": "The testes produce sperm and male sex hormones."
    },
    {
      "id": 64,
      "system": "Reproductive System",
      "question": "What is the normal duration of a menstrual cycle?",
      "options": ["21 days", "28 days", "35 days", "42 days"],
      "correct_answer": 1,
      "explanation": "The average menstrual cycle is 28 days, though normal ranges from 21-35 days."
    },
    {
      "id": 65,
      "system": "Reproductive System",
      "question": "Which hormone triggers ovulation?",
      "options": ["Estrogen", "Progesterone", "LH", "FSH"],
      "correct_answer": 2,
      "explanation": "Luteinizing hormone (LH) triggers ovulation in females."
    },
    {
      "id": 66,
      "system": "Reproductive System",
      "question": "What condition involves the abnormal growth of endometrial tissue?",
      "options": ["Ovarian cysts", "Endometriosis", "Fibroids", "PCOS"],
      "correct_answer": 1,
      "explanation": "Endometriosis involves the growth of endometrial tissue outside the uterus."
    },
    {
      "id": 67,
      "system": "Reproductive System",
      "question": "The prostate gland is found in:",
      "options": ["Both males and females", "Females only", "Males only", "Neither"],
      "correct_answer": 2,
      "explanation": "The prostate gland is found only in males and produces prostatic fluid."
    },
    {
      "id": 68,
      "system": "Reproductive System",
      "question": "What is the medical term for painful menstruation?",
      "options": ["Amenorrhea", "Menorrhagia", "Dysmenorrhea", "Oligomenorrhea"],
      "correct_answer": 2,
      "explanation": "Dysmenorrhea refers to painful menstrual periods."
    },

    // MUSCULAR SYSTEM (8 questions)
    {
      "id": 69,
      "system": "Muscular System",
      "question": "How many types of muscle tissue are there?",
      "options": ["2", "3", "4", "5"],
      "correct_answer": 1,
      "explanation": "There are three types: skeletal, cardiac, and smooth muscle."
    },
    {
      "id": 70,
      "system": "Muscular System",
      "question": "Which type of muscle is voluntary?",
      "options": ["Cardiac muscle", "Smooth muscle", "Skeletal muscle", "All muscles"],
      "correct_answer": 2,
      "explanation": "Skeletal muscle is under voluntary control and moves bones."
    },
    {
      "id": 71,
      "system": "Muscular System",
      "question": "What is the largest muscle in the human body?",
      "options": ["Biceps", "Quadriceps", "Gluteus maximus", "Gastrocnemius"],
      "correct_answer": 2,
      "explanation": "The gluteus maximus is the largest muscle in the human body."
    },
    {
      "id": 72,
      "system": "Muscular System",
      "question": "Which protein is primarily responsible for muscle contraction?",
      "options": ["Collagen", "Keratin", "Actin and myosin", "Elastin"],
      "correct_answer": 2,
      "explanation": "Actin and myosin filaments slide past each other to cause muscle contraction."
    },
    {
      "id": 73,
      "system": "Muscular System",
      "question": "What condition involves progressive muscle weakness?",
      "options": ["Arthritis", "Muscular dystrophy", "Osteoporosis", "Tendinitis"],
      "correct_answer": 1,
      "explanation": "Muscular dystrophy is a group of diseases causing progressive muscle weakness."
    },
    {
      "id": 74,
      "system": "Muscular System",
      "question": "Which muscle type is found in the heart?",
      "options": ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Striated muscle"],
      "correct_answer": 2,
      "explanation": "Cardiac muscle is found only in the heart and contracts involuntarily."
    },
    {
      "id": 75,
      "system": "Muscular System",
      "question": "What connects muscle to bone?",
      "options": ["Ligaments", "Tendons", "Cartilage", "Fascia"],
      "correct_answer": 1,
      "explanation": "Tendons are fibrous connective tissues that attach muscle to bone."
    },
    {
      "id": 76,
      "system": "Muscular System",
      "question": "The muscle that raises the eyebrows is the:",
      "options": ["Orbicularis oculi", "Frontalis", "Temporalis", "Masseter"],
      "correct_answer": 1,
      "explanation": "The frontalis muscle is responsible for raising the eyebrows and wrinkling the forehead."
    },

    // INTEGUMENTARY SYSTEM (8 questions)
    {
      "id": 77,
      "system": "Integumentary System",
      "question": "How many layers does the skin have?",
      "options": ["2", "3", "4", "5"],
      "correct_answer": 1,
      "explanation": "The skin has three main layers: epidermis, dermis, and hypodermis (subcutaneous)."
    },
    {
      "id": 78,
      "system": "Integumentary System",
      "question": "Which layer of skin contains melanocytes?",
      "options": ["Epidermis", "Dermis", "Hypodermis", "All layers"],
      "correct_answer": 0,
      "explanation": "Melanocytes are found in the epidermis and produce melanin for skin pigmentation."
    },
    {
      "id": 79,
      "system": "Integumentary System",
      "question": "What is the main function of sebaceous glands?",
      "options": ["Produce sweat", "Produce oil", "Produce hair", "Regulate temperature"],
      "correct_answer": 1,
      "explanation": "Sebaceous glands produce sebum (oil) to lubricate skin and hair."
    },
    {
      "id": 80,
      "system": "Integumentary System",
      "question": "Which skin condition is characterized by red, scaly patches?",
      "options": ["Acne", "Eczema", "Psoriasis", "Melanoma"],
      "correct_answer": 2,
      "explanation": "Psoriasis causes red, scaly patches due to rapid skin cell turnover."
    },
    {
      "id": 81,
      "system": "Integumentary System",
      "question": "What gives skin its color?",
      "options": ["Keratin", "Collagen", "Melanin", "Elastin"],
      "correct_answer": 2,
      "explanation": "Melanin is the pigment that determines skin color and protects against UV radiation."
    },
    {
      "id": 82,
      "system": "Integumentary System",
      "question": "Which type of sweat gland is found in the armpits?",
      "options": ["Eccrine glands", "Apocrine glands", "Sebaceous glands", "Ceruminous glands"],
      "correct_answer": 1,
      "explanation": "Apocrine glands are found in areas like armpits and produce thicker sweat."
    },
    {
      "id": 83,
      "system": "Integumentary System",
      "question": "What is the most common type of skin cancer?",
      "options": ["Melanoma", "Basal cell carcinoma", "Squamous cell carcinoma", "Sarcoma"],
      "correct_answer": 1,
      "explanation": "Basal cell carcinoma is the most common type of skin cancer."
    },
    {
      "id": 84,
      "system": "Integumentary System",
      "question": "The protein that makes skin waterproof is:",
      "options": ["Collagen", "Elastin", "Keratin", "Melanin"],
      "correct_answer": 2,
      "explanation": "Keratin is a fibrous protein that makes the outer layer of skin waterproof."
    },

    // IMMUNE/LYMPHATIC SYSTEM (8 questions)
    {
      "id": 85,
      "system": "Immune System",
      "question": "Which organ filters lymph and produces lymphocytes?",
      "options": ["Spleen", "Thymus", "Lymph nodes", "Bone marrow"],
      "correct_answer": 2,
      "explanation": "Lymph nodes filter lymph fluid and are sites of lymphocyte activation."
    },
    {
      "id": 86,
      "system": "Immune System",
      "question": "Which cells are responsible for antibody production?",
      "options": ["T cells", "B cells", "Natural killer cells", "Macrophages"],
      "correct_answer": 1,
      "explanation": "B cells differentiate into plasma cells that produce antibodies."
    },
    {
      "id": 87,
      "system": "Immune System",
      "question": "What is the largest lymphatic organ?",
      "options": ["Thymus", "Spleen", "Tonsils", "Lymph nodes"],
      "correct_answer": 1,
      "explanation": "The spleen is the largest lymphatic organ and filters blood."
    },
    {
      "id": 88,
      "system": "Immune System",
      "question": "Which immune disorder involves the body attacking its own tissues?",
      "options": ["Allergy", "Immunodeficiency", "Autoimmune disease", "Cancer"],
      "correct_answer": 2,
      "explanation": "Autoimmune diseases occur when the immune system attacks the body's own cells."
    },
    {
      "id": 89,
      "system": "Immune System",
      "question": "Where do T cells mature?",
      "options": ["Bone marrow", "Spleen", "Thymus", "Lymph nodes"],
      "correct_answer": 2,
      "explanation": "T cells mature in the thymus gland, hence the name T cells."
    },
    {
      "id": 90,
      "system": "Immune System",
      "question": "What type of immunity is provided by vaccines?",
      "options": ["Natural active", "Natural passive", "Artificial active", "Artificial passive"],
      "correct_answer": 2,
      "explanation": "Vaccines provide artificial active immunity by exposing the body to antigens."
    },
    {
      "id": 91,
      "system": "Immune System",
      "question": "Which immune cells engulf and destroy pathogens?",
      "options": ["B cells", "T cells", "Macrophages", "Plasma cells"],
      "correct_answer": 2,
      "explanation": "Macrophages are phagocytic cells that engulf and destroy pathogens."
    },
    {
      "id": 92,
      "system": "Immune System",
      "question": "What condition results from HIV destroying helper T cells?",
      "options": ["Cancer", "AIDS", "Diabetes", "Arthritis"],
      "correct_answer": 1,
      "explanation": "AIDS (Acquired Immunodeficiency Syndrome) results from HIV destroying CD4+ T helper cells."
    },

    // SENSORY SYSTEM (8 questions)
    {
      "id": 93,
      "system": "Sensory System",
      "question": "Which part of the eye controls the amount of light entering?",
      "options": ["Cornea", "Lens", "Iris", "Retina"],
      "correct_answer": 2,
      "explanation": "The iris controls pupil size, regulating light entry into the eye."
    },
    {
      "id": 94,
      "system": "Sensory System",
      "question": "Where are the receptors for hearing located?",
      "options": ["Outer ear", "Middle ear", "Inner ear", "Eardrum"],
      "correct_answer": 2,
      "explanation": "Hair cells in the cochlea of the inner ear detect sound vibrations."
    },
    {
      "id": 95,
      "system": "Sensory System",
      "question": "Which structure in the ear is responsible for balance?",
      "options": ["Cochlea", "Semicircular canals", "Eardrum", "Eustachian tube"],
      "correct_answer": 1,
      "explanation": "The semicircular canals in the inner ear detect head movements and maintain balance."
    },
    {
      "id": 96,
      "system": "Sensory System",
      "question": "What eye condition involves increased intraocular pressure?",
      "options": ["Cataract", "Glaucoma", "Macular degeneration", "Myopia"],
      "correct_answer": 1,
      "explanation": "Glaucoma involves increased pressure inside the eye that can damage the optic nerve."
    },
    {
      "id": 97,
      "system": "Sensory System",
      "question": "Which taste sensation is detected at the tip of the tongue primarily?",
      "options": ["Bitter", "Sour", "Sweet", "Umami"],
      "correct_answer": 2,
      "explanation": "Sweet taste receptors are most concentrated at the tip of the tongue."
    },
    {
      "id": 98,
      "system": "Sensory System",
      "question": "What part of the eye focuses light onto the retina?",
      "options": ["Cornea", "Iris", "Lens", "Vitreous humor"],
      "correct_answer": 2,
      "explanation": "The lens changes shape to focus light rays onto the retina."
    },
    {
      "id": 99,
      "system": "Sensory System",
      "question": "Which sensory receptor detects pain?",
      "options": ["Mechanoreceptors", "Thermoreceptors", "Nociceptors", "Chemoreceptors"],
      "correct_answer": 2,
      "explanation": "Nociceptors are specialized receptors that detect potentially harmful stimuli as pain."
    },
    {
      "id": 100,
      "system": "Sensory System",
      "question": "What condition involves ringing in the ears?",
      "options": ["Vertigo", "Tinnitus", "Meniere's disease", "Otitis media"],
      "correct_answer": 1,
      "explanation": "Tinnitus is the perception of ringing, buzzing, or other sounds in the ears."
    },
  {
    "id": 121,
    "type": "mcq",
    "question": "Which part of the neuron receives signals from other neurons?",
    "options": ["Axon", "Dendrites", "Cell body", "Myelin sheath"],
    "correct_answer": "Dendrites",
    "topic": "Nervous System"
  },
  {
    "id": 122,
    "type": "mcq",
    "question": "The central nervous system consists of:",
    "options": ["Brain and spinal cord", "Brain and nerves", "Spinal cord and nerves", "Neurons and neuroglia"],
    "correct_answer": "Brain and spinal cord",
    "topic": "Nervous System"
  },
  {
    "id": 123,
    "type": "mcq",
    "question": "Which lobe of the brain is primarily responsible for visual processing?",
    "options": ["Frontal lobe", "Parietal lobe", "Temporal lobe", "Occipital lobe"],
    "correct_answer": "Occipital lobe",
    "topic": "Brain Functions"
  },
  {
    "id": 124,
    "type": "mcq",
    "question": "The cerebellum is mainly responsible for:",
    "options": ["Memory formation", "Balance and coordination", "Emotional processing", "Language comprehension"],
    "correct_answer": "Balance and coordination",
    "topic": "Brain Functions"
  },
  {
    "id": 125,
    "type": "mcq",
    "question": "Which part of the brain controls vital functions like breathing and heart rate?",
    "options": ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
    "correct_answer": "Medulla oblongata",
    "topic": "Brain Functions"
  },
  {
    "id": 126,
    "type": "mcq",
    "question": "The sympathetic nervous system typically causes:",
    "options": ["Decreased heart rate", "Constricted pupils", "Increased digestive activity", "Increased heart rate"],
    "correct_answer": "Increased heart rate",
    "topic": "Sympathetic Functions"
  },
  {
    "id": 127,
    "type": "mcq",
    "question": "During parasympathetic stimulation, which organ response occurs?",
    "options": ["Bronchial dilation", "Increased salivation", "Decreased digestive activity", "Pupil dilation"],
    "correct_answer": "Increased salivation",
    "topic": "Parasympathetic Functions"
  },
  {
    "id": 128,
    "type": "mcq",
    "question": "The fight-or-flight response is associated with:",
    "options": ["Parasympathetic nervous system", "Sympathetic nervous system", "Somatic nervous system", "Central nervous system"],
    "correct_answer": "Sympathetic nervous system",
    "topic": "Sympathetic Functions"
  },
  {
    "id": 129,
    "type": "mcq",
    "question": "In a reflex arc, the correct sequence of components is:",
    "options": ["Receptor → Motor neuron → Interneuron → Sensory neuron → Effector", "Receptor → Sensory neuron → Interneuron → Motor neuron → Effector", "Effector → Motor neuron → Interneuron → Sensory neuron → Receptor", "Sensory neuron → Receptor → Interneuron → Motor neuron → Effector"],
    "correct_answer": "Receptor → Sensory neuron → Interneuron → Motor neuron → Effector",
    "topic": "Reflex Arc"
  },
  {
    "id": 130,
    "type": "mcq",
    "question": "The knee-jerk reflex is an example of:",
    "options": ["Conditioned reflex", "Monosynaptic reflex", "Polysynaptic reflex", "Learned reflex"],
    "correct_answer": "Monosynaptic reflex",
    "topic": "Reflex Action"
  },
  {
    "id": 131,
    "type": "mcq",
    "question": "At a synapse, neurotransmitters are released from:",
    "options": ["Dendrites", "Cell body", "Axon terminals", "Myelin sheath"],
    "correct_answer": "Axon terminals",
    "topic": "Synapse"
  },
  {
    "id": 132,
    "type": "mcq",
    "question": "The gap between two neurons at a synapse is called:",
    "options": ["Synaptic cleft", "Axon hillock", "Node of Ranvier", "Neuromuscular junction"],
    "correct_answer": "Synaptic cleft",
    "topic": "Synapse"
  },
  {
    "id": 133,
    "type": "mcq",
    "question": "Which type of neuroglia produces myelin in the central nervous system?",
    "options": ["Astrocytes", "Microglia", "Oligodendrocytes", "Ependymal cells"],
    "correct_answer": "Oligodendrocytes",
    "topic": "Neuroglia"
  },
  {
    "id": 134,
    "type": "mcq",
    "question": "Astrocytes primarily function to:",
    "options": ["Produce cerebrospinal fluid", "Form myelin sheaths", "Support and nourish neurons", "Fight infections"],
    "correct_answer": "Support and nourish neurons",
    "topic": "Neuroglia"
  },
  {
    "id": 135,
    "type": "mcq",
    "question": "The circulatory system includes all of the following EXCEPT:",
    "options": ["Heart", "Blood vessels", "Blood", "Kidneys"],
    "correct_answer": "Kidneys",
    "topic": "Organ Systems"
  },
  {
    "id": 136,
    "type": "mcq",
    "question": "Which organ system is responsible for gas exchange?",
    "options": ["Digestive system", "Respiratory system", "Circulatory system", "Excretory system"],
    "correct_answer": "Respiratory system",
    "topic": "Organ Systems"
  },
  {
    "id": 137,
    "type": "mcq",
    "question": "The endocrine system communicates through:",
    "options": ["Electrical signals", "Hormones", "Neurotransmitters", "Physical contact"],
    "correct_answer": "Hormones",
    "topic": "Organ Systems"
  },
  {
    "id": 138,
    "type": "mcq",
    "question": "Hypertension is a disease affecting which organ system?",
    "options": ["Digestive system", "Respiratory system", "Circulatory system", "Nervous system"],
    "correct_answer": "Circulatory system",
    "topic": "Common Diseases"
  },
  {
    "id": 208,
    "type": "mcq",
    "question": "The collecting duct in the nephron is primarily involved in:",
    "options": ["Filtration", "Secretion", "Water reabsorption", "Waste production"],
    "correct_answer": "Water reabsorption",
    "topic": "Urine Formation"
  },
  {
    "id": 209,
    "type": "mcq",
    "question": "Creatinine clearance is used to measure:",
    "options": ["Liver function", "Kidney function", "Heart function", "Lung function"],
    "correct_answer": "Kidney function",
    "topic": "Urine Formation"
  },
  {
    "id": 210,
    "type": "mcq",
    "question": "The normal pH of urine is approximately:",
    "options": ["5.0", "6.0", "7.0", "8.0"],
    "correct_answer": "6.0",
    "topic": "Urine Formation"
  },
  {
    "id": 211,
    "type": "mcq",
    "question": "Surfactant in the lungs helps to:",
    "options": ["Filter air", "Reduce surface tension", "Warm incoming air", "Humidify air"],
    "correct_answer": "Reduce surface tension",
    "topic": "Breathing Mechanism"
  },
  {
    "id": 212,
    "type": "mcq",
    "question": "The respiratory rate is primarily controlled by:",
    "options": ["Oxygen levels", "Carbon dioxide levels", "Blood pressure", "Heart rate"],
    "correct_answer": "Carbon dioxide levels",
    "topic": "Breathing Mechanism"
  },
  {
    "id": 213,
    "type": "mcq",
    "question": "Forced expiration involves:",
    "options": ["Only diaphragm relaxation", "Abdominal muscle contraction", "No muscle activity", "Only intercostal muscle relaxation"],
    "correct_answer": "Abdominal muscle contraction",
    "topic": "Breathing Mechanism"
  },
  {
    "id": 214,
    "type": "mcq",
    "question": "A spiral fracture is typically caused by:",
    "options": ["Direct impact", "Twisting force", "Compression", "Bending"],
    "correct_answer": "Twisting force",
    "topic": "Types of Fractures"
  },
  {
    "id": 215,
    "type": "mcq",
    "question": "A comminuted fracture involves:",
    "options": ["Two bone fragments", "Multiple bone fragments", "Bone penetrating skin", "Incomplete break"],
    "correct_answer": "Multiple bone fragments",
    "topic": "Types of Fractures"
  },
  {
    "id": 216,
    "type": "mcq",
    "question": "Stress fractures commonly occur in:",
    "options": ["Children", "Elderly", "Athletes", "Sedentary individuals"],
    "correct_answer": "Athletes",
    "topic": "Types of Fractures"
  },
  {
    "id": 217,
    "type": "mcq",
    "question": "Acne is primarily caused by:",
    "options": ["Bacterial infection", "Viral infection", "Allergic reaction", "Genetic factors only"],
    "correct_answer": "Bacterial infection",
    "topic": "Skin Diseases"
  },
  {
    "id": 218,
    "type": "mcq",
    "question": "Vitiligo is characterized by:",
    "options": ["Excessive pigmentation", "Loss of pigmentation", "Skin thickening", "Hair growth"],
    "correct_answer": "Loss of pigmentation",
    "topic": "Skin Diseases"
  },
  {
    "id": 219,
    "type": "mcq",
    "question": "Dermatitis is generally defined as:",
    "options": ["Skin cancer", "Skin inflammation", "Skin infection", "Skin aging"],
    "correct_answer": "Skin inflammation",
    "topic": "Skin Diseases"
  },
  {
    "id": 220,
    "type": "mcq",
    "question": "Short bones are primarily found in the:",
    "options": ["Arms", "Legs", "Wrists and ankles", "Spine"],
    "correct_answer": "Wrists and ankles",
    "topic": "Types of Bones"
  },
  {
    "id": 221,
    "type": "mcq",
    "question": "Sesamoid bones develop within:",
    "options": ["Joints", "Tendons", "Ligaments", "Cartilage"],
    "correct_answer": "Tendons",
    "topic": "Types of Bones"
  },
  {
    "id": 222,
    "type": "mcq",
    "question": "The patella is an example of a:",
    "options": ["Long bone", "Short bone", "Flat bone", "Sesamoid bone"],
    "correct_answer": "Sesamoid bone",
    "topic": "Types of Bones"
  },
  {
    "id": 223,
    "type": "mcq",
    "question": "Peristalsis in the digestive system involves:",
    "options": ["Chemical breakdown", "Muscular contractions", "Enzyme production", "Absorption"],
    "correct_answer": "Muscular contractions",
    "topic": "Digestive System"
  },
  {
    "id": 224,
    "type": "mcq",
    "question": "The pyloric sphincter controls the flow from:",
    "options": ["Esophagus to stomach", "Stomach to duodenum", "Small to large intestine", "Duodenum to jejunum"],
    "correct_answer": "Stomach to duodenum",
    "topic": "Digestive System"
  },
  {
    "id": 225,
    "type": "mcq",
    "question": "Villi are found in the:",
    "options": ["Stomach", "Large intestine", "Small intestine", "Esophagus"],
    "correct_answer": "Small intestine",
    "topic": "Digestive System"
  },
  {
    "id": 226,
    "type": "mcq",
    "question": "Hydrochloric acid in the stomach is produced by:",
    "options": ["Chief cells", "Parietal cells", "Mucus cells", "G cells"],
    "correct_answer": "Parietal cells",
    "topic": "Digestive System"
  },
  {
    "id": 227,
    "type": "mcq",
    "question": "The large intestine primarily absorbs:",
    "options": ["Proteins", "Carbohydrates", "Water and electrolytes", "Fats"],
    "correct_answer": "Water and electrolytes",
    "topic": "Digestive System"
  },
  {
    "id": 228,
    "type": "mcq",
    "question": "Blood pressure is highest in the:",
    "options": ["Veins", "Capillaries", "Arteries", "Venules"],
    "correct_answer": "Arteries",
    "topic": "Circulatory System"
  },
  {
    "id": 229,
    "type": "mcq",
    "question": "The tricuspid valve is located between the:",
    "options": ["Right atrium and right ventricle", "Left atrium and left ventricle", "Right ventricle and pulmonary artery", "Left ventricle and aorta"],
    "correct_answer": "Right atrium and right ventricle",
    "topic": "Circulatory System"
  },
  {
    "id": 230,
    "type": "mcq",
    "question": "Platelets are involved in:",
    "options": ["Oxygen transport", "Immune defense", "Blood clotting", "Nutrient transport"],
    "correct_answer": "Blood clotting",
    "topic": "Circulatory System"
  },
  {
    "id": 231,
    "type": "mcq",
    "question": "The epiglottis prevents food from entering the:",
    "options": ["Esophagus", "Stomach", "Trachea", "Pharynx"],
    "correct_answer": "Trachea",
    "topic": "Respiratory System"
  },
  {
    "id": 232,
    "type": "mcq",
    "question": "Carbon dioxide is transported in blood primarily as:",
    "options": ["Dissolved gas", "Carbonic acid", "Bicarbonate ions", "Carboxyhemoglobin"],
    "correct_answer": "Bicarbonate ions",
    "topic": "Respiratory System"
  },
  {
    "id": 233,
    "type": "mcq",
    "question": "The respiratory membrane consists of:",
    "options": ["Alveolar epithelium only", "Capillary endothelium only", "Both alveolar and capillary walls", "Bronchial epithelium"],
    "correct_answer": "Both alveolar and capillary walls",
    "topic": "Respiratory System"
  },
  {
    "id": 234,
    "type": "mcq",
    "question": "Aldosterone regulates:",
    "options": ["Blood glucose", "Sodium reabsorption", "Calcium levels", "Protein synthesis"],
    "correct_answer": "Sodium reabsorption",
    "topic": "Excretory System"
  },
  {
    "id": 235,
    "type": "mcq",
    "question": "The renal threshold refers to:",
    "options": ["Maximum filtration rate", "Minimum urine production", "Maximum reabsorption capacity", "Minimum blood flow"],
    "correct_answer": "Maximum reabsorption capacity",
    "topic": "Excretory System"
  },
  {
    "id": 236,
    "type": "mcq",
    "question": "Muscle fatigue is primarily caused by:",
    "options": ["Oxygen depletion", "Glucose depletion", "Lactic acid accumulation", "Protein breakdown"],
    "correct_answer": "Lactic acid accumulation",
    "topic": "Muscular System"
  },
  {
    "id": 237,
    "type": "mcq",
    "question": "The sliding filament theory explains:",
    "options": ["Bone growth", "Muscle contraction", "Nerve conduction", "Blood clotting"],
    "correct_answer": "Muscle contraction",
    "topic": "Muscular System"
  },
  {
    "id": 238,
    "type": "mcq",
    "question": "Tendons connect:",
    "options": ["Bone to bone", "Muscle to bone", "Muscle to muscle", "Bone to cartilage"],
    "correct_answer": "Muscle to bone",
    "topic": "Muscular System"
  },
  {
    "id": 239,
    "type": "mcq",
    "question": "Osteoblasts are responsible for:",
    "options": ["Bone breakdown", "Bone formation", "Calcium storage", "Blood cell production"],
    "correct_answer": "Bone formation",
    "topic": "Skeletal System"
  },
  {
    "id": 240,
    "type": "mcq",
    "question": "Synovial fluid is found in:",
    "options": ["All joints", "Movable joints only", "Fixed joints only", "Cartilaginous joints only"],
    "correct_answer": "Movable joints only",
    "topic": "Skeletal System"
  },
  {
    "id": 241,
    "type": "mcq",
    "question": "Cortisol is produced by the:",
    "options": ["Thyroid gland", "Parathyroid glands", "Adrenal cortex", "Adrenal medulla"],
    "correct_answer": "Adrenal cortex",
    "topic": "Endocrine System"
  },
  {
    "id": 242,
    "type": "mcq",
    "question": "The hormone oxytocin is involved in:",
    "options": ["Growth", "Metabolism", "Childbirth", "Digestion"],
    "correct_answer": "Childbirth",
    "topic": "Endocrine System"
  },
  {
    "id": 243,
    "type": "mcq",
    "question": "Negative feedback mechanisms:",
    "options": ["Increase hormone production", "Maintain hormone balance", "Stop all hormone production", "Only work during stress"],
    "correct_answer": "Maintain hormone balance",
    "topic": "Endocrine System"
  },
  {
    "id": 244,
    "type": "mcq",
    "question": "Fertilization typically occurs in the:",
    "options": ["Ovary", "Uterus", "Fallopian tube", "Cervix"],
    "correct_answer": "Fallopian tube",
    "topic": "Reproductive System"
  },
  {
    "id": 245,
    "type": "mcq",
    "question": "The prostate gland produces:",
    "options": ["Sperm", "Testosterone", "Seminal fluid", "Urine"],
    "correct_answer": "Seminal fluid",
    "topic": "Reproductive System"
  },
  {
    "id": 246,
    "type": "mcq",
    "question": "Sebaceous glands produce:",
    "options": ["Sweat", "Oil", "Hormones", "Pigment"],
    "correct_answer": "Oil",
    "topic": "Integumentary System"
  },
  {
    "id": 247,
    "type": "mcq",
    "question": "The hypodermis is composed mainly of:",
    "options": ["Muscle tissue", "Nervous tissue", "Adipose tissue", "Connective tissue"],
    "correct_answer": "Adipose tissue",
    "topic": "Integumentary System"
  },
  {
    "id": 248,
    "type": "mcq",
    "question": "Antibodies are produced by:",
    "options": ["T-cells", "B-cells", "Macrophages", "Neutrophils"],
    "correct_answer": "B-cells",
    "topic": "Lymphatic System"
  },
  {
    "id": 249,
    "type": "mcq",
    "question": "The thoracic duct drains lymph into the:",
    "options": ["Right atrium", "Left subclavian vein", "Superior vena cava", "Aorta"],
    "correct_answer": "Left subclavian vein",
    "topic": "Lymphatic System"
  },
  {
    "id": 250,
    "type": "mcq",
    "question": "Alzheimer's disease is characterized by:",
    "options": ["Muscle weakness", "Memory loss", "Joint pain", "Breathing difficulties"],
    "correct_answer": "Memory loss",
    "topic": "Common Diseases"
  },
  {
    "id": 251,
    "type": "mcq",
    "question": "Pneumonia is an infection of the:",
    "options": ["Heart", "Liver", "Lungs", "Kidneys"],
    "correct_answer": "Lungs",
    "topic": "Common Diseases"
  },
  {
    "id": 252,
    "type": "mcq",
    "question": "Gastroesophageal reflux disease (GERD) affects the:",
    "options": ["Liver", "Pancreas", "Esophagus and stomach", "Small intestine"],
    "correct_answer": "Esophagus and stomach",
    "topic": "Common Diseases"
  },
  {
    "id": 253,
    "type": "mcq",
    "question": "Myocardial infarction refers to:",
    "options": ["Lung collapse", "Heart attack", "Stroke", "Kidney failure"],
    "correct_answer": "Heart attack",
    "topic": "Common Diseases"
  },
  {
    "id": 254,
    "type": "mcq",
    "question": "The hypothalamus regulates:",
    "options": ["Only temperature", "Only hunger", "Multiple homeostatic functions", "Only sleep"],
    "correct_answer": "Multiple homeostatic functions",
    "topic": "Brain Functions"
  },
  {
    "id": 255,
    "type": "mcq",
    "question": "Wernicke's area is associated with:",
    "options": ["Speech production", "Language comprehension", "Motor control", "Visual processing"],
    "correct_answer": "Language comprehension",
    "topic": "Brain Functions"
  },
  {
    "id": 256,
    "type": "mcq",
    "question": "The blood-brain barrier is formed by:",
    "options": ["Neurons", "Astrocytes", "Microglia", "Oligodendrocytes"],
    "correct_answer": "Astrocytes",
    "topic": "Brain Functions"
  },
  {
    "id": 257,
    "type": "mcq",
    "question": "Sympathetic stimulation of the digestive system causes:",
    "options": ["Increased motility", "Decreased motility", "Increased secretion", "No change"],
    "correct_answer": "Decreased motility",
    "topic": "Sympathetic Functions"
  },
  {
    "id": 258,
    "type": "mcq",
    "question": "The sympathetic nervous system originates from:",
    "options": ["Cranial nerves", "Thoracolumbar region", "Sacral region", "Cervical region"],
    "correct_answer": "Thoracolumbar region",
    "topic": "Sympathetic Functions"
  },
  {
    "id": 259,
    "type": "mcq",
    "question": "Parasympathetic stimulation of the bladder causes:",
    "options": ["Relaxation", "Contraction", "No effect", "Decreased sensitivity"],
    "correct_answer": "Contraction",
    "topic": "Parasympathetic Functions"
  },
  {
    "id": 260,
    "type": "mcq",
    "question": "The vagus nerve is part of the:",
    "options": ["Sympathetic nervous system", "Parasympathetic nervous system", "Somatic nervous system", "Enteric nervous system"],
    "correct_answer": "Parasympathetic nervous system",
    "topic": "Parasympathetic Functions"
  },
  {
    "id": 261,
    "type": "mcq",
    "question": "Crossed extensor reflex is an example of:",
    "options": ["Monosynaptic reflex", "Polysynaptic reflex", "Unconditioned reflex", "Spinal reflex"],
    "correct_answer": "Polysynaptic reflex",
    "topic": "Reflex Action"
  },
  {
    "id": 262,
    "type": "mcq",
    "question": "The reflex arc bypasses the:",
    "options": ["Spinal cord", "Brain", "Sensory neurons", "Motor neurons"],
    "correct_answer": "Brain",
    "topic": "Reflex Arc"
  },
  {
    "id": 263,
    "type": "mcq",
    "question": "Inhibitory neurotransmitters cause:",
    "options": ["Depolarization", "Hyperpolarization", "No change", "Action potential"],
    "correct_answer": "Hyperpolarization",
    "topic": "Synapse"
  },
  {
    "id": 264,
    "type": "mcq",
    "question": "Synaptic delay is caused by:",
    "options": ["Long axons", "Myelination", "Chemical transmission", "Action potential speed"],
    "correct_answer": "Chemical transmission",
    "topic": "Synapse"
  },
  {
    "id": 265,
    "type": "mcq",
    "question": "Schwann cells are found in the:",
    "options": ["Central nervous system", "Peripheral nervous system", "Brain only", "Spinal cord only"],
    "correct_answer": "Peripheral nervous system",
    "topic": "Neuroglia"
  },
  {
    "id": 266,
    "type": "mcq",
    "question": "The blood-brain barrier is most permeable to:",
    "options": ["Large proteins", "Lipid-soluble substances", "Water-soluble substances", "Electrolytes"],
    "correct_answer": "Lipid-soluble substances",
    "topic": "Neuroglia"
  },
  {
    "id": 267,
    "type": "mcq",
    "question": "Organ systems work together to maintain:",
    "options": ["Growth", "Homeostasis", "Reproduction", "Movement"],
    "correct_answer": "Homeostasis",
    "topic": "Organ Systems"
  },
  {
    "id": 268,
    "type": "mcq",
    "question": "The integumentary system includes:",
    "options": ["Only skin", "Skin and hair", "Skin, hair, and nails", "Skin, hair, nails, and glands"],
    "correct_answer": "Skin, hair, nails, and glands",
    "topic": "Organ Systems"
  },
  {
    "id": 269,
    "type": "mcq",
    "question": "Stroke primarily affects the:",
    "options": ["Heart", "Brain", "Lungs", "Kidneys"],
    "correct_answer": "Brain",
    "topic": "Common Diseases"
  },
  {
    "id": 270,
    "type": "mcq",
    "question": "Chronic kidney disease can lead to:",
    "options": ["Diabetes", "Hypertension", "Anemia", "All of the above"],
    "correct_answer": "All of the above",
    "topic": "Common Diseases"
  },
  {
    "id": 139,
    "type": "mcq",
    "question": "Diabetes mellitus primarily affects:",
    "options": ["Respiratory system", "Endocrine system", "Digestive system", "Muscular system"],
    "correct_answer": "Endocrine system",
    "topic": "Common Diseases"
  },
  {
    "id": 140,
    "type": "mcq",
    "question": "Asthma is characterized by:",
    "options": ["Inflammation of joints", "Narrowing of airways", "High blood pressure", "Kidney stones"],
    "correct_answer": "Narrowing of airways",
    "topic": "Common Diseases"
  },
  {
    "id": 141,
    "type": "mcq",
    "question": "The first step in urine formation is:",
    "options": ["Secretion", "Reabsorption", "Filtration", "Concentration"],
    "correct_answer": "Filtration",
    "topic": "Urine Formation"
  },
  {
    "id": 142,
    "type": "mcq",
    "question": "Glomerular filtration occurs in the:",
    "options": ["Collecting duct", "Loop of Henle", "Renal corpuscle", "Proximal tubule"],
    "correct_answer": "Renal corpuscle",
    "topic": "Urine Formation"
  },
  {
    "id": 143,
    "type": "mcq",
    "question": "Most glucose reabsorption occurs in the:",
    "options": ["Glomerulus", "Proximal convoluted tubule", "Distal convoluted tubule", "Collecting duct"],
    "correct_answer": "Proximal convoluted tubule",
    "topic": "Urine Formation"
  },
  {
    "id": 144,
    "type": "mcq",
    "question": "During inspiration, the diaphragm:",
    "options": ["Moves upward", "Moves downward", "Remains stationary", "Contracts laterally"],
    "correct_answer": "Moves downward",
    "topic": "Breathing Mechanism"
  },
  {
    "id": 145,
    "type": "mcq",
    "question": "The breathing control center is located in the:",
    "options": ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
    "correct_answer": "Medulla oblongata",
    "topic": "Breathing Mechanism"
  },
  {
    "id": 146,
    "type": "mcq",
    "question": "During expiration, the intercostal muscles:",
    "options": ["Contract", "Relax", "Remain unchanged", "Alternate contractions"],
    "correct_answer": "Relax",
    "topic": "Breathing Mechanism"
  },
  {
    "id": 147,
    "type": "mcq",
    "question": "A complete break in a bone is called:",
    "options": ["Hairline fracture", "Greenstick fracture", "Complete fracture", "Stress fracture"],
    "correct_answer": "Complete fracture",
    "topic": "Types of Fractures"
  },
  {
    "id": 148,
    "type": "mcq",
    "question": "A fracture where the bone breaks but doesn't penetrate the skin is:",
    "options": ["Open fracture", "Closed fracture", "Compound fracture", "Spiral fracture"],
    "correct_answer": "Closed fracture",
    "topic": "Types of Fractures"
  },
  {
    "id": 149,
    "type": "mcq",
    "question": "Greenstick fractures are most common in:",
    "options": ["Adults", "Elderly", "Children", "Athletes"],
    "correct_answer": "Children",
    "topic": "Types of Fractures"
  },
  {
    "id": 150,
    "type": "mcq",
    "question": "Eczema is characterized by:",
    "options": ["Fungal infection", "Bacterial infection", "Inflammation and itching", "Viral infection"],
    "correct_answer": "Inflammation and itching",
    "topic": "Skin Diseases"
  },
  {
    "id": 151,
    "type": "mcq",
    "question": "Psoriasis causes:",
    "options": ["Hair loss", "Rapid skin cell turnover", "Excessive sweating", "Loss of pigmentation"],
    "correct_answer": "Rapid skin cell turnover",
    "topic": "Skin Diseases"
  },
  {
    "id": 152,
    "type": "mcq",
    "question": "Athlete's foot is caused by:",
    "options": ["Bacteria", "Virus", "Fungus", "Parasite"],
    "correct_answer": "Fungus",
    "topic": "Skin Diseases"
  },
  {
    "id": 153,
    "type": "mcq",
    "question": "Long bones are found in the:",
    "options": ["Skull", "Spine", "Arms and legs", "Ribs"],
    "correct_answer": "Arms and legs",
    "topic": "Types of Bones"
  },
  {
    "id": 154,
    "type": "mcq",
    "question": "Flat bones primarily function to:",
    "options": ["Support body weight", "Protect organs", "Enable movement", "Store minerals"],
    "correct_answer": "Protect organs",
    "topic": "Types of Bones"
  },
  {
    "id": 155,
    "type": "mcq",
    "question": "The vertebrae are examples of:",
    "options": ["Long bones", "Short bones", "Flat bones", "Irregular bones"],
    "correct_answer": "Irregular bones",
    "topic": "Types of Bones"
  },
  {
    "id": 156,
    "type": "mcq",
    "question": "Mechanical digestion in the mouth is performed by:",
    "options": ["Saliva", "Teeth", "Tongue", "Enzymes"],
    "correct_answer": "Teeth",
    "topic": "Digestive System"
  },
  {
    "id": 157,
    "type": "mcq",
    "question": "The enzyme pepsin works optimally in:",
    "options": ["Alkaline conditions", "Neutral conditions", "Acidic conditions", "Any pH condition"],
    "correct_answer": "Acidic conditions",
    "topic": "Digestive System"
  },
  {
    "id": 158,
    "type": "mcq",
    "question": "Most nutrient absorption occurs in the:",
    "options": ["Stomach", "Large intestine", "Small intestine", "Esophagus"],
    "correct_answer": "Small intestine",
    "topic": "Digestive System"
  },
  {
    "id": 159,
    "type": "mcq",
    "question": "The pancreas produces:",
    "options": ["Only insulin", "Only digestive enzymes", "Both hormones and enzymes", "Only bile"],
    "correct_answer": "Both hormones and enzymes",
    "topic": "Digestive System"
  },
  {
    "id": 160,
    "type": "mcq",
    "question": "Bile is stored in the:",
    "options": ["Liver", "Pancreas", "Gallbladder", "Duodenum"],
    "correct_answer": "Gallbladder",
    "topic": "Digestive System"
  },
  {
    "id": 161,
    "type": "mcq",
    "question": "The left ventricle pumps blood to the:",
    "options": ["Lungs", "Right atrium", "Systemic circulation", "Pulmonary circulation"],
    "correct_answer": "Systemic circulation",
    "topic": "Circulatory System"
  },
  {
    "id": 162,
    "type": "mcq",
    "question": "Arteries carry blood:",
    "options": ["Always to the heart", "Always away from the heart", "Only oxygenated blood", "Only deoxygenated blood"],
    "correct_answer": "Always away from the heart",
    "topic": "Circulatory System"
  },
  {
    "id": 163,
    "type": "mcq",
    "question": "The pacemaker of the heart is the:",
    "options": ["AV node", "SA node", "Bundle of His", "Purkinje fibers"],
    "correct_answer": "SA node",
    "topic": "Circulatory System"
  },
  {
    "id": 164,
    "type": "mcq",
    "question": "Gas exchange in the lungs occurs in the:",
    "options": ["Bronchi", "Bronchioles", "Alveoli", "Trachea"],
    "correct_answer": "Alveoli",
    "topic": "Respiratory System"
  },
  {
    "id": 165,
    "type": "mcq",
    "question": "The voice box is also called the:",
    "options": ["Pharynx", "Larynx", "Trachea", "Epiglottis"],
    "correct_answer": "Larynx",
    "topic": "Respiratory System"
  },
  {
    "id": 166,
    "type": "mcq",
    "question": "Oxygen is carried in the blood primarily by:",
    "options": ["Plasma", "White blood cells", "Platelets", "Hemoglobin"],
    "correct_answer": "Hemoglobin",
    "topic": "Respiratory System"
  },
  {
    "id": 167,
    "type": "mcq",
    "question": "The functional unit of the kidney is the:",
    "options": ["Glomerulus", "Nephron", "Collecting duct", "Renal pelvis"],
    "correct_answer": "Nephron",
    "topic": "Excretory System"
  },
  {
    "id": 168,
    "type": "mcq",
    "question": "Urea is produced in the:",
    "options": ["Kidneys", "Liver", "Bladder", "Lungs"],
    "correct_answer": "Liver",
    "topic": "Excretory System"
  },
  {
    "id": 169,
    "type": "mcq",
    "question": "The hormone ADH regulates:",
    "options": ["Blood sugar", "Water reabsorption", "Calcium levels", "Blood pressure"],
    "correct_answer": "Water reabsorption",
    "topic": "Excretory System"
  },
  {
    "id": 170,
    "type": "mcq",
    "question": "Smooth muscle is found in the:",
    "options": ["Heart", "Skeletal system", "Digestive tract", "Face"],
    "correct_answer": "Digestive tract",
    "topic": "Muscular System"
  },
  {
    "id": 171,
    "type": "mcq",
    "question": "Cardiac muscle is:",
    "options": ["Voluntary and striated", "Involuntary and smooth", "Involuntary and striated", "Voluntary and smooth"],
    "correct_answer": "Involuntary and striated",
    "topic": "Muscular System"
  },
  {
    "id": 172,
    "type": "mcq",
    "question": "The largest muscle in the human body is the:",
    "options": ["Biceps", "Quadriceps", "Gluteus maximus", "Latissimus dorsi"],
    "correct_answer": "Gluteus maximus",
    "topic": "Muscular System"
  },
  {
    "id": 173,
    "type": "mcq",
    "question": "Bone tissue is primarily composed of:",
    "options": ["Calcium phosphate", "Calcium carbonate", "Sodium chloride", "Magnesium oxide"],
    "correct_answer": "Calcium phosphate",
    "topic": "Skeletal System"
  },
  {
    "id": 174,
    "type": "mcq",
    "question": "Red blood cells are produced in the:",
    "options": ["Liver", "Spleen", "Bone marrow", "Lymph nodes"],
    "correct_answer": "Bone marrow",
    "topic": "Skeletal System"
  },
  {
    "id": 175,
    "type": "mcq",
    "question": "A joint that allows no movement is called:",
    "options": ["Synovial", "Cartilaginous", "Fibrous", "Ball and socket"],
    "correct_answer": "Fibrous",
    "topic": "Skeletal System"
  },
  {
    "id": 176,
    "type": "mcq",
    "question": "The master gland of the endocrine system is the:",
    "options": ["Thyroid", "Adrenal", "Pituitary", "Pancreas"],
    "correct_answer": "Pituitary",
    "topic": "Endocrine System"
  },
  {
    "id": 177,
    "type": "mcq",
    "question": "Insulin is produced by the:",
    "options": ["Liver", "Pancreas", "Adrenal glands", "Thyroid"],
    "correct_answer": "Pancreas",
    "topic": "Endocrine System"
  },
  {
    "id": 178,
    "type": "mcq",
    "question": "Growth hormone is secreted by the:",
    "options": ["Anterior pituitary", "Posterior pituitary", "Thyroid", "Parathyroid"],
    "correct_answer": "Anterior pituitary",
    "topic": "Endocrine System"
  },
  {
    "id": 179,
    "type": "mcq",
    "question": "Sperm are produced in the:",
    "options": ["Prostate gland", "Seminal vesicles", "Seminiferous tubules", "Epididymis"],
    "correct_answer": "Seminiferous tubules",
    "topic": "Reproductive System"
  },
  {
    "id": 180,
    "type": "mcq",
    "question": "Ovulation occurs in the:",
    "options": ["Uterus", "Fallopian tubes", "Ovaries", "Cervix"],
    "correct_answer": "Ovaries",
    "topic": "Reproductive System"
  },
  {
    "id": 181,
    "type": "mcq",
    "question": "The menstrual cycle is approximately:",
    "options": ["21 days", "28 days", "35 days", "14 days"],
    "correct_answer": "28 days",
    "topic": "Reproductive System"
  },
  {
    "id": 182,
    "type": "mcq",
    "question": "The epidermis is composed primarily of:",
    "options": ["Dead cells", "Living cells", "Blood vessels", "Nerve endings"],
    "correct_answer": "Dead cells",
    "topic": "Integumentary System"
  },
  {
    "id": 183,
    "type": "mcq",
    "question": "Melanin is produced by:",
    "options": ["Keratinocytes", "Melanocytes", "Fibroblasts", "Adipocytes"],
    "correct_answer": "Melanocytes",
    "topic": "Integumentary System"
  },
  {
    "id": 184,
    "type": "mcq",
    "question": "Sweat glands help regulate:",
    "options": ["Blood pressure", "Body temperature", "pH balance", "Hormone levels"],
    "correct_answer": "Body temperature",
    "topic": "Integumentary System"
  },
  {
    "id": 185,
    "type": "mcq",
    "question": "Lymph nodes function to:",
    "options": ["Produce hormones", "Filter lymph", "Store nutrients", "Regulate temperature"],
    "correct_answer": "Filter lymph",
    "topic": "Lymphatic System"
  },
  {
    "id": 186,
    "type": "mcq",
    "question": "The spleen is part of the:",
    "options": ["Digestive system", "Circulatory system", "Lymphatic system", "Endocrine system"],
    "correct_answer": "Lymphatic system",
    "topic": "Lymphatic System"
  },
  {
    "id": 187,
    "type": "mcq",
    "question": "T-cells mature in the:",
    "options": ["Bone marrow", "Spleen", "Thymus", "Liver"],
    "correct_answer": "Thymus",
    "topic": "Lymphatic System"
  },
  {
    "id": 188,
    "type": "mcq",
    "question": "Parkinson's disease affects the:",
    "options": ["Respiratory system", "Nervous system", "Digestive system", "Circulatory system"],
    "correct_answer": "Nervous system",
    "topic": "Common Diseases"
  },
  {
    "id": 189,
    "type": "mcq",
    "question": "Osteoporosis is characterized by:",
    "options": ["Muscle weakness", "Bone density loss", "Joint inflammation", "Nerve damage"],
    "correct_answer": "Bone density loss",
    "topic": "Common Diseases"
  },
  {
    "id": 190,
    "type": "mcq",
    "question": "Anemia results from:",
    "options": ["High blood pressure", "Low red blood cell count", "High white blood cell count", "Excessive clotting"],
    "correct_answer": "Low red blood cell count",
    "topic": "Common Diseases"
  },
  {
    "id": 191,
    "type": "mcq",
    "question": "The thalamus functions as a:",
    "options": ["Memory center", "Relay station", "Balance center", "Speech center"],
    "correct_answer": "Relay station",
    "topic": "Brain Functions"
  },
  {
    "id": 192,
    "type": "mcq",
    "question": "Broca's area is responsible for:",
    "options": ["Hearing", "Vision", "Speech production", "Memory"],
    "correct_answer": "Speech production",
    "topic": "Brain Functions"
  },
  {
    "id": 193,
    "type": "mcq",
    "question": "The corpus callosum connects:",
    "options": ["Brain and spinal cord", "Left and right hemispheres", "Cerebrum and cerebellum", "Brain and brainstem"],
    "correct_answer": "Left and right hemispheres",
    "topic": "Brain Functions"
  },
  {
    "id": 194,
    "type": "mcq",
    "question": "Sympathetic stimulation causes the pupils to:",
    "options": ["Constrict", "Dilate", "Remain unchanged", "Close completely"],
    "correct_answer": "Dilate",
    "topic": "Sympathetic Functions"
  },
  {
    "id": 195,
    "type": "mcq",
    "question": "Which neurotransmitter is primarily associated with the sympathetic nervous system?",
    "options": ["Acetylcholine", "Dopamine", "Norepinephrine", "Serotonin"],
    "correct_answer": "Norepinephrine",
    "topic": "Sympathetic Functions"
  },
  {
    "id": 196,
    "type": "mcq",
    "question": "Parasympathetic stimulation of the heart causes:",
    "options": ["Increased heart rate", "Decreased heart rate", "Irregular heartbeat", "No change in heart rate"],
    "correct_answer": "Decreased heart rate",
    "topic": "Parasympathetic Functions"
  },
  {
    "id": 197,
    "type": "mcq",
    "question": "The parasympathetic nervous system uses which neurotransmitter?",
    "options": ["Norepinephrine", "Dopamine", "Acetylcholine", "GABA"],
    "correct_answer": "Acetylcholine",
    "topic": "Parasympathetic Functions"
  },
  {
    "id": 198,
    "type": "mcq",
    "question": "A withdrawal reflex is an example of a:",
    "options": ["Monosynaptic reflex", "Polysynaptic reflex", "Conditioned reflex", "Spinal reflex only"],
    "correct_answer": "Polysynaptic reflex",
    "topic": "Reflex Action"
  },
  {
    "id": 199,
    "type": "mcq",
    "question": "Reflex actions are processed in the:",
    "options": ["Brain only", "Spinal cord only", "Both brain and spinal cord", "Peripheral nerves only"],
    "correct_answer": "Both brain and spinal cord",
    "topic": "Reflex Arc"
  },
  {
    "id": 200,
    "type": "mcq",
    "question": "Synaptic transmission is primarily:",
    "options": ["Electrical", "Chemical", "Mechanical", "Thermal"],
    "correct_answer": "Chemical",
    "topic": "Synapse"
  },
  {
    "id": 201,
    "type": "mcq",
    "question": "Neurotransmitter reuptake occurs at the:",
    "options": ["Postsynaptic membrane", "Presynaptic terminal", "Synaptic cleft", "Axon hillock"],
    "correct_answer": "Presynaptic terminal",
    "topic": "Synapse"
  },
  {
    "id": 202,
    "type": "mcq",
    "question": "Microglia are the:",
    "options": ["Largest neuroglia", "Immune cells of the CNS", "Myelin-producing cells", "Fluid-producing cells"],
    "correct_answer": "Immune cells of the CNS",
    "topic": "Neuroglia"
  },
  {
    "id": 203,
    "type": "mcq",
    "question": "Ependymal cells line the:",
    "options": ["Blood vessels", "Ventricles", "Nerve fibers", "Synapses"],
    "correct_answer": "Ventricles",
    "topic": "Neuroglia"
  },
  {
    "id": 204,
    "type": "mcq",
    "question": "The immune system's primary function is to:",
    "options": ["Transport nutrients", "Defend against pathogens", "Regulate temperature", "Control growth"],
    "correct_answer": "Defend against pathogens",
    "topic": "Organ Systems"
  },
  {
    "id": 205,
    "type": "mcq",
    "question": "Homeostasis is maintained by:",
    "options": ["One organ system", "Multiple organ systems", "Only the nervous system", "Only the endocrine system"],
    "correct_answer": "Multiple organ systems",
    "topic": "Organ Systems"
  },
  {
    "id": 206,
    "type": "mcq",
    "question": "Arthritis primarily affects the:",
    "options": ["Muscular system", "Skeletal system", "Nervous system", "Circulatory system"],
    "correct_answer": "Skeletal system",
    "topic": "Common Diseases"
  },
  ],
  "Microbiology"= [
    {
      "type": "fill-in-the-blank",
      "question": "The study of microorganisms is known as ______.",
      "answer": "Microbiology",
      "id": 1
    },
    {
      "type": "fill-in-the-blank",
      "question": "The word 'microbiology' comes from 'micros' meaning small and 'bios' meaning ______.",
      "answer": "life",
      "id": 2
    },
    {
      "type": "fill-in-the-blank",
      "question": "Microorganisms play a major role in the production of ______, bread, cheese, and antibiotics.",
      "answer": "beer",
      "id": 3
    },
    {
      "type": "fill-in-the-blank",
      "question": "The concept that life can arise from non-living matter is called ______.",
      "answer": "spontaneous generation",
      "id": 4
    },
    {
      "type": "fill-in-the-blank",
      "question": "Francesco Redi disproved spontaneous generation using ______ and meat.",
      "answer": "maggots",
      "id": 5
    },
    {
      "type": "fill-in-the-blank",
      "question": "Microorganisms contribute to the cycling of ______ essential for life.",
      "answer": "elements",
      "id": 6
    },
    {
      "type": "fill-in-the-blank",
      "question": "The bacterial growth curve has ______ main phases.",
      "answer": "four",
      "id": 7
    },
    {
      "type": "fill-in-the-blank",
      "question": "In the ______ phase, bacterial cells adjust to their environment but do not divide.",
      "answer": "lag",
      "id": 8
    },
    {
      "type": "fill-in-the-blank",
      "question": "The most active phase of cell division is the ______ phase.",
      "answer": "log",
      "id": 9
    },
    {
      "type": "fill-in-the-blank",
      "question": "The final phase in the bacterial growth curve where cells die is the ______ phase.",
      "answer": "death",
      "id": 10
    },
    {
      "type": "fill-in-the-blank",
      "question": "The ______ time is the time required for a cell to divide.",
      "answer": "generation",
      "id": 11
    },
    {
      "type": "fill-in-the-blank",
      "question": "Microorganisms are divided into prokaryotes and ______.",
      "answer": "eukaryotes",
      "id": 12
    },
    {
      "type": "fill-in-the-blank",
      "question": "A ______ organism lacks a true nucleus.",
      "answer": "prokaryotic",
      "id": 13
    },
    {
      "type": "fill-in-the-blank",
      "question": "Bacteria reproduce by ______ fission.",
      "answer": "binary",
      "id": 14
    },
    {
      "type": "fill-in-the-blank",
      "question": "______ and vitamins are important benefits obtained from microorganisms.",
      "answer": "Antibiotics",
      "id": 15
    },
    {
      "type": "fill-in-the-blank",
      "question": "During the ______ phase, the number of new cells equals the number of dying cells.",
      "answer": "stationary",
      "id": 16
    },
    {
      "type": "fill-in-the-blank",
      "question": "Microorganisms can be found everywhere from geothermal vents to the ______.",
      "answer": "skin",
      "id": 17
    },
    {
      "type": "fill-in-the-blank",
      "question": "Microbial diseases like the plague and black death caused the decline of the ______ Empire.",
      "answer": "Roman",
      "id": 18
    },
    {
      "type": "fill-in-the-blank",
      "question": "During the death phase, cells die due to nutrient ______ and toxic waste accumulation.",
      "answer": "depletion",
      "id": 19
    },
    {
      "type": "fill-in-the-blank",
      "question": "The ______ phase is also called the exponential phase.",
      "answer": "log",
      "id": 20
    },
    {
      "type": "fill-in-the-blank",
      "question": "Tyndallization is named after _______ and involves boiling for typically _______ minutes.",
      "answer": "John Tyndall, 20",
      "id": 21
    },
    {
      "type": "fill-in-the-blank",
      "question": "The incubation periods in Tyndallization are repeated _______ to _______ times.",
      "answer": "three, four",
      "id": 22
    },
    {
      "type": "fill-in-the-blank",
      "question": "Plastic sputum containers should be disposed of by _______ after boiling for _______ minutes.",
      "answer": "incineration, 20",
      "id": 23
    },
    {
      "type": "fill-in-the-blank",
      "question": "Glass sputum containers can be recycled after autoclaving at _______°C and thorough _______.",
      "answer": "121, washing",
      "id": 24
    },
    {
      "type": "fill-in-the-blank",
      "question": "Parasites of the genus _______ are responsible for the disease _______ in both animals and man.",
      "answer": "Plasmodium, malaria",
      "id": 25
    },
    {
      "type": "fill-in-the-blank",
      "question": "The two stages of Toxoplasma known were the _______ and the _______.",
      "answer": "trophozoite, cyst",
      "id": 26
    },
    {
      "type": "fill-in-the-blank",
      "question": "When carrying a microscope, always use one hand on the _______ and one hand on the _______.",
      "answer": "Arm (AR), Base (BA)",
      "id": 27
    },
    {
      "type": "fill-in-the-blank",
      "question": "Always start and end focusing with _______ power _______ lens.",
      "answer": "low, Objectives (OB)",
      "id": 28
    },
    {
      "type": "fill-in-the-blank",
      "question": "The autoclave operates at _______ degree centigrade for _______ minutes.",
      "answer": "121, 15",
      "id": 29
    },
    {
      "type": "fill-in-the-blank",
      "question": "Optimal growth of E. coli occurs at _______°C, but some laboratory strains can survive up to _______°C.",
      "answer": "37, 49",
      "id": 30
    },
    {
      "type": "fill-in-the-blank",
      "question": "According to the Centers for Disease Control and Prevention, approximately _______ million Nigerian get sick from food poisoning.",
      "answer": "30",
      "id": 31
    },
    {
      "type": "fill-in-the-blank",
      "question": "_______ bacteria are hospitalized and _______ die each year from food poisoning.",
      "answer": "128,000, 3,000",
      "id": 32
    },
    {
      "type": "fill-in-the-blank",
      "question": "_______ is the name of a group of bacteria that causes the infection _______.",
      "answer": "Salmonella, salmonellosis",
      "id": 33
    },
    {
      "type": "fill-in-the-blank",
      "question": "Salmonella is more severe in _______ women, _______ adults, and younger _______.",
      "answer": "pregnant, older, children",
      "id": 34
    },
    {
      "type": "fill-in-the-blank",
      "question": "You can contract salmonellosis by consuming _______ and _______ eggs.",
      "answer": "raw, undercooked",
      "id": 35
    },
    {
      "type": "fill-in-the-blank",
      "question": "Food pathogens are substances such as _______ or _______ in food that cause illness.",
      "answer": "parasites, bacterial",
      "id": 36
    },
    {
      "type": "fill-in-the-blank",
      "question": "Microorganisms are not considered to be pathogenic until they have reached a _______ size.",
      "answer": "population",
      "id": 37
    },
    {
      "type": "fill-in-the-blank",
      "question": "Contaminate wire loops should be soaked for _______ hours in a _______ solution.",
      "answer": "two, bactericidal",
      "id": 38
    },
    {
      "type": "fill-in-the-blank",
      "question": "Always cover your microscope with a _______ _______ when not in use.",
      "answer": "dust jacket",
      "id": 39
    },
    {
      "type": "fill-in-the-blank",
      "question": "E. coli growth can be driven by _______ or _______ respiration.",
      "answer": "aerobic, anaerobic",
      "id": 40
    },
    {
      "type": "fill-in-the-blank",
      "question": "The shape of a bacterial colony could be circular, irregular, regular or _______ in shape.",
      "answer": "rhizoidal",
      "id": 41
    },
    {
      "type": "fill-in-the-blank",
      "question": "Colony elevation could be flat, raised, convex or _______ depending on the position of the colony.",
      "answer": "umbonate",
      "id": 42
    },
    {
      "type": "fill-in-the-blank",
      "question": "The edge of a colony could be entire, undulate, lobate, dentate or _______.",
      "answer": "rhizoid",
      "id": 43
    },
    {
      "type": "fill-in-the-blank",
      "question": "_______ consistency means the colony has a butter-like texture when touched with sterile wire loop.",
      "answer": "Butyrous",
      "id": 44
    },
    {
      "type": "fill-in-the-blank",
      "question": "_______ colonies appear dry when observed under appropriate conditions.",
      "answer": "Visid",
      "id": 45
    },
    {
      "type": "fill-in-the-blank",
      "question": "Colony surface could be smooth, rough, dull, wrinkled, glistening or _______ in nature.",
      "answer": "granular",
      "id": 46
    },
    {
      "type": "fill-in-the-blank",
      "question": "Rickettsia rickettsii is a small, _______-shaped bacterium that causes Rocky Mountain spotted fever.",
      "answer": "rod",
      "id": 47
    },
    {
      "type": "fill-in-the-blank",
      "question": "Rickettsia need _______ cells to be able to grow and also require arthropods as vectors.",
      "answer": "host",
      "id": 48
    },
    {
      "type": "fill-in-the-blank",
      "question": "The optimal temperature for Rickettsia rickettsii is _______ degrees Celsius.",
      "answer": "37",
      "id": 49
    },
    {
      "type": "fill-in-the-blank",
      "question": "Rickettsia rickettsii are _______ organisms that live in the cytoplasm of host cells.",
      "answer": "intracellular",
      "id": 50
    },
    {
      "type": "fill-in-the-blank",
      "question": "The motility test determines whether an organism is _______ using the hanging drop technique.",
      "answer": "motile",
      "id": 51
    },
    {
      "type": "fill-in-the-blank",
      "question": "Viruses have either _______ or RNA genomes, but not both in most cases.",
      "answer": "DNA",
      "id": 52
    },
    {
      "type": "fill-in-the-blank",
      "question": "There are three types of capsid symmetry: helical, _______ and complex.",
      "answer": "icosahedral",
      "id": 53
    },
    {
      "type": "fill-in-the-blank",
      "question": "The icosahedral capsid has _______ equilateral triangular faces and 12 vertices.",
      "answer": "20",
      "id": 54
    },
    {
      "type": "fill-in-the-blank",
      "question": "Helical capsids are shaped like hollow _______ with protein walls.",
      "answer": "tubes",
      "id": 55
    },
    {
      "type": "fill-in-the-blank",
      "question": "A microscope is an instrument used to see objects that are too _____ for the naked eye.",
      "answer": "small",
      "id": 56
    },
    {
      "type": "fill-in-the-blank",
      "question": "The science of investigating small objects using a microscope is called _____.",
      "answer": "microscopy",
      "id": 57
    },
    {
      "type": "fill-in-the-blank",
      "question": "A microscope is made up of _____ main parts: the stand, mechanical components, and lens systems.",
      "answer": "three",
      "id": 58
    },
    {
      "type": "fill-in-the-blank",
      "question": "The _____ is the framework of the microscope that comprises the tube, arm, and stage.",
      "answer": "stand",
      "id": 59
    },
    {
      "type": "fill-in-the-blank",
      "question": "For most laboratory microscopes, _____ or more objectives are needed and these are screwed into the revolving nose piece.",
      "answer": "three",
      "id": 60
    },
    {
      "type": "fill-in-the-blank",
      "question": "The eyepiece can either be _____ or binocular and is inserted to the upper end of the tube.",
      "answer": "monocular",
      "id": 61
    },
    {
      "type": "fill-in-the-blank",
      "question": "The _____ is the platform on which the object is placed for observation.",
      "answer": "stage",
      "id": 62
    },
    {
      "type": "fill-in-the-blank",
      "question": "A circular hole in the center of the stage allows _____ from below to pass through.",
      "answer": "light",
      "id": 63
    },
    {
      "type": "fill-in-the-blank",
      "question": "The _____ is immediately below the stage and holds the condenser with its diaphragm.",
      "answer": "sub stage",
      "id": 64
    },
    {
      "type": "fill-in-the-blank",
      "question": "The coarse adjustment is controlled by the _____ and _____ mechanism.",
      "answer": "rack and pinion",
      "id": 65
    },
    {
      "type": "fill-in-the-blank",
      "question": "The _____ adjustment is used for rough focusing which is often enough for low power objectives.",
      "answer": "coarse",
      "id": 66
    },
    {
      "type": "fill-in-the-blank",
      "question": "The condenser has features for focusing, adjustments of aperture (_____ diaphragm) and centring.",
      "answer": "iris",
      "id": 67
    },
    {
      "type": "fill-in-the-blank",
      "question": "The lens closest to the eye is called the _____, while the lens closest to the object is called the _____.",
      "answer": "ocular, objective",
      "id": 68
    },
    {
      "type": "fill-in-the-blank",
      "question": "The common light microscope used in the laboratory is called a _____ microscope.",
      "answer": "compound",
      "id": 69
    },
    {
      "type": "fill-in-the-blank",
      "question": "The total magnification possible with the microscope is the magnification achieved by the _____ multiplied by the magnification achieved by the _____ lens.",
      "answer": "objective, ocular",
      "id": 70
    },
    {
      "type": "fill-in-the-blank",
      "question": "A compound light microscope often contains _____ objective lenses: the scanning lens (4X), the low power lens (10X), the high power lens (40X), and the oil immersion lens (100X).",
      "answer": "four",
      "id": 71
    },
    {
      "type": "fill-in-the-blank",
      "question": "With an ocular lens that magnifies 10 times, the total magnifications possible will be _____ X with the scanning lens.",
      "answer": "40",
      "id": 72
    },
    {
      "type": "fill-in-the-blank",
      "question": "An _____ plate is an example of a bacterial growth medium.",
      "answer": "agar",
      "id": 73
    },
    {
      "type": "fill-in-the-blank",
      "question": "There are _____ major types of growth media: those used for cell culture and microbiological culture.",
      "answer": "two",
      "id": 74
    },
    {
      "type": "fill-in-the-blank",
      "question": "The most common growth media for microorganisms are _____ broths or LB medium.",
      "answer": "nutrient",
      "id": 75
    },
    {
      "type": "fill-in-the-blank",
      "question": "_____ media contain all the elements that most bacteria need for growth and are non-selective.",
      "answer": "Nutrient",
      "id": 76
    },
    {
      "type": "fill-in-the-blank",
      "question": "_____ media are used for the growth of only selected microorganisms.",
      "answer": "Selective",
      "id": 77
    },
    {
      "type": "fill-in-the-blank",
      "question": "_____ media distinguish one microorganism type from another growing on the same media.",
      "answer": "Differential",
      "id": 78
    },
    {
      "type": "fill-in-the-blank",
      "question": "Blood agar contains bovine heart blood that becomes _____ in the presence of hemolytic Streptococcus.",
      "answer": "transparent",
      "id": 79
    },
    {
      "type": "fill-in-the-blank",
      "question": "_____ media should fulfill criteria for temporary storage of specimens being transported to the laboratory for cultivation.",
      "answer": "Transport",
      "id": 80
    },
    {
      "type": "fill-in-the-blank",
      "question": "Sterilization is a term referring to any process that eliminates or _____ all forms of life.",
      "answer": "kills",
      "id": 81
    },
    {
      "type": "fill-in-the-blank",
      "question": "Sterilization can be achieved with one or more of the following: heat, chemicals, irradiation, high _____, and filtration.",
      "answer": "pressure",
      "id": 82
    },
    {
      "type": "fill-in-the-blank",
      "question": "A widely used method for heat sterilization is the _____, sometimes called a converter or steam sterilizer.",
      "answer": "autoclave",
      "id": 83
    },
    {
      "type": "fill-in-the-blank",
      "question": "Autoclaves use steam heated to _____°C under pressure to achieve sterility.",
      "answer": "121-134",
      "id": 84
    },
    {
      "type": "fill-in-the-blank",
      "question": "All slides of bacteria must be examined under the _____ immersion lens.",
      "answer": "oil",
      "id": 85
    },
    
    
    {
      "type": "theory",
      "question": "What is the principle behind Tyndallization sterilization method?",
      "answer": "Tyndallization works by allowing heat-resistant spores to germinate during incubation periods, forming heat-sensitive vegetative stages that can be killed by subsequent boiling steps.",
      "id": 86
    },
    {
      "type": "theory",
      "question": "Why is Tyndallization considered an obsolete sterilization method?",
      "answer": "It is lengthy, requiring multiple boiling and incubation cycles over several days, and only works for media that can support bacterial growth.",
      "id": 87
    },
    {
      "type": "theory",
      "question": "Explain why Tyndallization is ineffective against prions.",
      "answer": "Prions are protein-based infectious agents that are extremely resistant to heat and chemical treatments, unlike vegetative bacteria and spores that Tyndallization targets.",
      "id": 88
    },
    {
      "type": "theory",
      "question": "What is the theoretical basis for autoclave sterilization?",
      "answer": "Autoclaves use moist heat under pressure (121°C for 15 minutes) to denature proteins and destroy all forms of microbial life, including spores.",
      "id": 89
    },
    {
      "type": "theory",
      "question": "Why must microscope handling follow specific procedures?",
      "answer": "Microscopes are expensive, precision instruments that require careful handling to prevent damage to optical components and maintain proper alignment for accurate observations.",
      "id": 90
    },
    {
      "type": "theory",
      "question": "Explain the life cycle complexity of Plasmodium parasites.",
      "answer": "Plasmodium has complex life cycles involving multiple hosts (humans and mosquitoes) with different developmental stages, making it difficult to study and control.",
      "id": 91
    },
    {
      "type": "theory",
      "question": "What makes Toxoplasma a remarkable parasite?",
      "answer": "Toxoplasma can infect almost any nucleated cell and has a complex life cycle with multiple stages, allowing it to persist in various host organisms.",
      "id": 92
    },
    {
      "type": "theory",
      "question": "Why do some bacterial strains survive extreme temperatures?",
      "answer": "Certain bacteria have evolved mechanisms like heat-shock proteins, modified membrane compositions, and protective spore formation to survive temperature extremes.",
      "id": 93
    },
    {
      "type": "theory",
      "question": "What factors contribute to food pathogen multiplication?",
      "answer": "Improper food handling, inadequate cooking temperatures, poor storage conditions, and cross-contamination allow pathogens to multiply to infectious levels.",
      "id": 94
    },
    {
      "type": "theory",
      "question": "Why are certain populations more vulnerable to Salmonella infections?",
      "answer": "Pregnant women, older adults, and young children have compromised or developing immune systems, making them less capable of fighting off bacterial infections.",
      "id": 95
    },
    {
      "type": "theory",
      "question": "Explain the concept of infectious dose in food pathogens.",
      "answer": "Pathogens must reach a minimum population size (infectious dose) to overwhelm the host's immune defenses and cause clinical symptoms of disease.",
      "id": 96
    },
    {
      "type": "theory",
      "question": "Why is proper lens cleaning essential in microscopy?",
      "answer": "Dirty lenses scatter light, reduce image clarity, and can permanently damage expensive optical coatings, affecting the quality of microscopic observations.",
      "id": 97
    },
    {
      "type": "theory",
      "question": "What is the principle behind low-power objective lens usage?",
      "answer": "Low-power objectives provide wider fields of view and greater working distances, making specimen location and initial focusing safer and easier.",
      "id": 98
    },
    {
      "type": "theory",
      "question": "Explain why E. coli is used as an indicator organism.",
      "answer": "E. coli is naturally present in human intestines, easy to detect, and its presence indicates fecal contamination and potential presence of other pathogens.",
      "id": 99
    },
    {
      "type": "theory",
      "question": "What makes Salmonella particularly dangerous in food systems?",
      "answer": "Salmonella can survive in various environmental conditions, multiply rapidly at room temperature, and cause severe illness even in relatively small numbers.",
      "id": 100
    },
    {
      "type": "theory",
      "question": "Why do spores require special sterilization considerations?",
      "answer": "Bacterial spores have protective coats and low water content, making them extremely resistant to heat, radiation, and chemical disinfectants.",
      "id": 101
    },
    {
      "type": "theory",
      "question": "Explain the importance of proper waste disposal in microbiology.",
      "answer": "Contaminated materials can spread infections, so proper disposal (incineration, autoclaving) ensures pathogens are destroyed before waste enters the environment.",
      "id": 102
    },
    {
      "type": "theory",
      "question": "What factors influence bacterial growth rates?",
      "answer": "Temperature, pH, oxygen availability, nutrient concentration, and water activity all affect how quickly bacteria can multiply in different environments.",
      "id": 103
    },
    {
      "type": "theory",
      "question": "Why is cross-contamination a major concern in food safety?",
      "answer": "Pathogens can transfer from contaminated surfaces, utensils, or hands to ready-to-eat foods, bypassing cooking steps that would normally kill them.",
      "id": 104
    },
    {
      "type": "theory",
      "question": "Explain the relationship between malaria transmission and Plasmodium species diversity.",
      "answer": "Different Plasmodium species have varying host specificities, transmission patterns, and disease severity, with recent discoveries showing cross-species transmission potential.",
      "id": 105
    },
    {
      "type": "theory",
      "question": "Explain the concept of spontaneous generation and how Francesco Redi challenged it.",
      "id": 106
    },
    {
      "type": "theory",
      "question": "Discuss the beneficial roles of microorganisms in food production.",
      "id": 107
    },
    {
      "type": "theory",
      "question": "Describe the four phases of the bacterial growth curve.",
      "id": 108
    },
    {
      "type": "theory",
      "question": "What is generation time and how is it measured?",
      "id": 109
    },
    {
      "type": "theory",
      "question": "State the contributions of microorganisms to the ecosystem.",
      "id": 110
    },
    {
      "type": "theory",
      "question": "How did microorganisms influence historical events such as the Black Death?",
      "id": 111
    },
    {
      "type": "theory",
      "question": "Differentiate between prokaryotic and eukaryotic microorganisms.",
      "id": 112
    },
    {
      "type": "theory",
      "question": "Why is the lag phase important in microbial growth?",
      "id": 113
    },
    {
      "type": "theory",
      "question": "Explain how nutrient availability affects the death phase.",
      "id": 114
    },
    {
      "type": "theory",
      "question": "What are the general characteristics of microorganisms?",
      "id": 115
    },
    {
      "type": "theory",
      "question": "Why are microorganisms considered essential for life on Earth?",
      "id": 116
    },
    {
      "type": "theory",
      "question": "Explain the importance of ATP in bacterial growth.",
      "id": 117
    },
    {
      "type": "theory",
      "question": "How does temperature affect microbial growth phases?",
      "id": 118
    },
    {
      "type": "theory",
      "question": "Describe how cell division occurs in the log phase.",
      "id": 119
    },
    {
      "type": "theory",
      "question": "Why is the stationary phase considered a phase of survival?",
      "id": 120
    },
    {
      "type": "theory",
      "question": "Explain the role of microorganisms in oxygen and carbon dioxide cycling.",
      "id": 121
    },
    {
      "type": "theory",
      "question": "Discuss the medical importance of microorganisms.",
      "id": 122
    },
    {
      "type": "theory",
      "question": "How do microbes help in digestion and vitamin synthesis?",
      "id": 123
    },
    {
      "type": "theory",
      "question": "What causes a bacterial population to reach the stationary phase?",
      "id": 124
    },
    {
      "type": "theory",
      "question": "Why do microorganisms eventually die during the death phase?",
      "id": 125
    },
    {
      "type": "theory",
      "question": "Explain the difference between monocular and binocular microscopes and their applications.",
      "id": 126
    },
    {
      "type": "theory",
      "question": "Describe the function and importance of the condenser in a light microscope.",
      "id": 127
    },
    {
      "type": "theory",
      "question": "Explain how total magnification is calculated in a compound microscope.",
      "id": 128
    },
    {
      "type": "theory",
      "question": "Discuss the differences between coarse and fine adjustment mechanisms in microscopy.",
      "id": 129
    },
    {
      "type": "theory",
      "question": "Describe the role of the iris diaphragm in controlling light and image quality.",
      "id": 130
    },
    {
      "type": "theory",
      "question": "Explain why oil immersion is necessary when using the 100X objective lens.",
      "id": 131
    },
    {
      "type": "theory",
      "question": "Compare and contrast nutrient media and selective media in microbiology.",
      "id": 132
    },
    {
      "type": "theory",
      "question": "Describe the principle and applications of differential media in bacterial identification.",
      "id": 133
    },
    {
      "type": "theory",
      "question": "Explain the importance of transport media in specimen collection and handling.",
      "id": 134
    },
    {
      "type": "theory",
      "question": "Discuss the different types of sterilization methods and their applications.",
      "id": 135
    },
    {
      "type": "theory",
      "question": "Describe the autoclave sterilization process and its parameters for effectiveness.",
      "id": 136
    },
    {
      "type": "theory",
      "question": "Explain the difference between sterilization and disinfection.",
      "id": 137
    },
    {
      "type": "theory",
      "question": "Describe the proper technique for oil immersion microscopy.",
      "id": 138
    },
    {
      "type": "theory",
      "question": "Explain the importance of parfocal objectives in microscopy.",
      "id": 139
    },
    {
      "type": "theory",
      "question": "Discuss the applications of blood agar as a differential medium.",
      "id": 140
    },
    {
      "type": "theory",
      "question": "Describe the composition and uses of MacConkey agar.",
      "id": 141
    },
    {
      "type": "theory",
      "question": "Explain the concept of D-value in sterilization processes.",
      "id": 142
    },
    {
      "type": "theory",
      "question": "Discuss the advantages and limitations of moist heat sterilization.",
      "id": 143
    },
    {
      "type": "theory",
      "question": "Describe the proper care and maintenance of microscope lenses.",
      "id": 144
    },
    {
      "type": "theory",
      "question": "Explain the role of enriched media in supporting fastidious microorganisms.",
      "id": 145
    }
  ],
  "Symptomatology"= [
    {
      "id": 1,
      "question": "What is symptomatology?",
      "options": [
        "The study of disease causes",
        "The branch of medicine dealing with study and classification of symptoms",
        "The treatment of diseases",
        "The prevention of diseases"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 2,
      "question": "What is the difference between a symptom and a sign?",
      "options": [
        "There is no difference",
        "A symptom is objective, a sign is subjective",
        "A symptom is what the patient feels, a sign is what the physician observes",
        "A symptom is physical, a sign is mental"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 3,
      "question": "Which of the following is an example of a symptom?",
      "options": [
        "Skin rash",
        "Swollen hand",
        "Headache",
        "High temperature"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 4,
      "question": "What are remitting symptoms?",
      "options": [
        "Symptoms that never go away",
        "Symptoms that improve or resolve completely",
        "Symptoms that get worse over time",
        "Symptoms that occur only at night"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 5,
      "question": "Chronic symptoms are characterized as:",
      "options": [
        "Short-lasting symptoms",
        "Symptoms that occur once",
        "Long-lasting or recurrent symptoms",
        "Symptoms that only affect children"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 6,
      "question": "What are relapsing symptoms?",
      "options": [
        "New symptoms that appear",
        "Symptoms that have occurred in the past, resolved, and returned",
        "Symptoms that never change",
        "Symptoms that only occur during treatment"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 7,
      "question": "Which structure is NOT part of the mouth?",
      "options": [
        "Tongue",
        "Buccal mucosa",
        "Ovula",
        "Trachea"
      ],
      "correct": 3,
      "type": "mcq"
    },
    {
      "id": 8,
      "question": "Dental caries is also known as:",
      "options": [
        "Gum disease",
        "Tooth decay",
        "Oral cancer",
        "Gingivitis"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 9,
      "question": "The three main factors in dental caries formation are:",
      "options": [
        "Tooth, bacteria, time",
        "Tooth, bacteria, diet",
        "Diet, time, genetics",
        "Bacteria, saliva, age"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 10,
      "question": "Poor oral hygiene can lead to:",
      "options": [
        "Only dental caries",
        "Only gingivitis",
        "Both dental caries and gingivitis",
        "Neither condition"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 11,
      "question": "Which is a sign of dental caries?",
      "options": [
        "Toothache",
        "Hole in the tooth",
        "Sensitivity to hot foods",
        "Bad taste in mouth"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 12,
      "question": "Gingivitis is:",
      "options": [
        "Tooth decay",
        "Inflammation of the gums",
        "Oral cancer",
        "A type of filling"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 13,
      "question": "What is the number one cause of bleeding gums in adults?",
      "options": [
        "Tooth decay",
        "Oral cancer",
        "Gingivitis",
        "Tooth sensitivity"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 14,
      "question": "Which factor does NOT cause gingivitis?",
      "options": [
        "Poor oral hygiene",
        "Smoking",
        "Regular dental checkups",
        "Stress"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 15,
      "question": "Oral cancer is characterized by:",
      "options": [
        "Normal tissue growth",
        "Abnormal growth that heals quickly",
        "Abnormal growth that does not heal or go away",
        "Temporary mouth sores"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 16,
      "question": "Which is NOT a possible cause of oral cancer?",
      "options": [
        "Smoking",
        "Excessive alcohol consumption",
        "Regular tooth brushing",
        "Family history of cancer"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 17,
      "question": "A persistent sore in the mouth may indicate:",
      "options": [
        "Normal healing",
        "Minor injury",
        "Possible oral cancer",
        "Good oral health"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 18,
      "question": "Prevention of oral diseases includes:",
      "options": [
        "Avoiding dental visits",
        "Eating more candy",
        "Good oral hygiene",
        "Smoking cessation only"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 19,
      "question": "How often should one visit a dentist for check-ups?",
      "options": [
        "Once every five years",
        "At least twice a year",
        "Only when in pain",
        "Once in a lifetime"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 20,
      "question": "Respiratory diseases affect:",
      "options": [
        "Only the lungs",
        "Only the airways",
        "The airways and lungs that affect human respiration",
        "Only the throat"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 21,
      "question": "Bronchitis is:",
      "options": [
        "Lung cancer",
        "Inflammation of the bronchial mucosa",
        "Heart disease",
        "Kidney disease"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 22,
      "question": "Which is NOT a cause of bronchitis?",
      "options": [
        "Cigarette smoking",
        "Air pollution",
        "Regular exercise",
        "Dust exposure"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 23,
      "question": "Acute bronchitis usually improves within:",
      "options": [
        "1-2 days",
        "7-10 days",
        "3-4 weeks",
        "2-3 months"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 24,
      "question": "A common symptom of bronchitis is:",
      "options": [
        "Skin rash",
        "Cough",
        "Hair loss",
        "Nail changes"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 25,
      "question": "Rhinitis is:",
      "options": [
        "Inflammation of the nasal mucosa",
        "Lung infection",
        "Heart condition",
        "Skin disease"
      ],
      "correct": 0,
      "type": "mcq"
    },
    {
      "id": 26,
      "question": "Allergic rhinitis is:",
      "options": [
        "Life-threatening",
        "Always chronic",
        "Not a life-threatening condition unless accompanied by severe asthma",
        "Only affects children"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 27,
      "question": "A symptom of rhinitis is:",
      "options": [
        "Chest pain",
        "Sneezing",
        "Back pain",
        "Leg swelling"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 28,
      "question": "Pneumonia is an infection of:",
      "options": [
        "The heart",
        "The kidneys",
        "The pulmonary alveoli",
        "The liver"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 29,
      "question": "Pneumonia is the leading cause of death in:",
      "options": [
        "Adults over 65",
        "Children under five years",
        "Teenagers",
        "Middle-aged adults"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 30,
      "question": "Those at high risk for pneumonia include:",
      "options": [
        "Healthy adults only",
        "Children under five and elderly people with health problems",
        "Only pregnant women",
        "Only smokers"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 31,
      "question": "SARS-COV-2 causes:",
      "options": [
        "Tuberculosis",
        "COVID-19",
        "Bronchitis",
        "Rhinitis"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 32,
      "question": "A common symptom of pneumonia is:",
      "options": [
        "Skin rash",
        "Difficulty breathing (dyspnea)",
        "Hair loss",
        "Joint pain"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 33,
      "question": "Tuberculosis is caused by:",
      "options": [
        "A virus",
        "A fungus",
        "Mycobacterium tuberculosis",
        "Poor nutrition alone"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 34,
      "question": "The incubation period for tuberculosis is:",
      "options": [
        "1-2 days",
        "1-2 weeks",
        "2-10 weeks",
        "6-12 months"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 35,
      "question": "Nigeria is among how many countries with the highest TB burden?",
      "options": [
        "Top 10",
        "Top 20",
        "Top 30",
        "Top 50"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 36,
      "question": "TB is curable if:",
      "options": [
        "Left untreated",
        "Detected early and treated promptly",
        "Only in children",
        "Only with surgery"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 37,
      "question": "A symptom of tuberculosis is:",
      "options": [
        "Sudden weight gain",
        "Persistent cough for more than 2 weeks",
        "Improved appetite",
        "Increased energy"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 38,
      "question": "Night sweats are associated with:",
      "options": [
        "Good health",
        "Tuberculosis",
        "Normal aging",
        "Exercise"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 39,
      "question": "The rationale for symptomatology includes:",
      "options": [
        "To make incorrect diagnosis",
        "To delay treatment",
        "To make correct diagnosis",
        "To avoid patient contact"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 40,
      "question": "Clinical diagnosis is made using:",
      "options": [
        "Only laboratory tests",
        "Signs and symptoms of disease",
        "Only patient history",
        "Only physical examination"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 41,
      "question": "Lab diagnosis involves:",
      "options": [
        "Only visual examination",
        "Chemical reagents and sophisticated equipment",
        "Only patient interviews",
        "Only physical tests"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 42,
      "question": "Symptomatology helps to:",
      "options": [
        "Confuse patients",
        "Determine disease severity",
        "Delay referrals",
        "Avoid treatment"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 43,
      "question": "Monitoring patient improvement is important for:",
      "options": [
        "Billing purposes only",
        "Legal requirements only",
        "Assessing treatment effectiveness",
        "Hospital statistics only"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 44,
      "question": "The frenulum is part of:",
      "options": [
        "The respiratory system",
        "The mouth structures",
        "The digestive tract",
        "The nervous system"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 45,
      "question": "Stomatitis refers to:",
      "options": [
        "Tooth decay",
        "Gum disease",
        "Mouth inflammation",
        "Throat infection"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 46,
      "question": "Fluoridated toothpaste helps prevent:",
      "options": [
        "Gingivitis only",
        "Oral cancer only",
        "Dental caries",
        "Bad breath only"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 47,
      "question": "Dysphagia refers to:",
      "options": [
        "Difficulty breathing",
        "Difficulty swallowing",
        "Difficulty speaking",
        "Difficulty hearing"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 48,
      "question": "Hoarseness may be a sign of:",
      "options": [
        "Good vocal health",
        "Normal aging",
        "Possible oral cancer",
        "Improved voice quality"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 49,
      "question": "Chest discomfort is a symptom of:",
      "options": [
        "Good respiratory health",
        "Bronchitis",
        "Normal breathing",
        "Exercise fitness"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 50,
      "question": "Antibiotics are used for patients with:",
      "options": [
        "Viral infections only",
        "Bacterial infections in poor general condition",
        "All respiratory conditions",
        "Healthy individuals"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 51,
      "question": "Face masks are used for:",
      "options": [
        "Fashion purposes",
        "Prevention of respiratory infections",
        "Hiding identity",
        "Keeping warm only"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 52,
      "question": "Nasal obstruction causes:",
      "options": [
        "Improved breathing",
        "Stuffy nose",
        "Better sleep",
        "Enhanced smell"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 53,
      "question": "Lacrimation refers to:",
      "options": [
        "Dry eyes",
        "Eye discharge/tearing",
        "Improved vision",
        "Normal blinking"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 54,
      "question": "Anorexia in tuberculosis means:",
      "options": [
        "Increased appetite",
        "Normal eating",
        "Loss of appetite",
        "Food allergy"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 55,
      "question": "The mode of transmission of TB is:",
      "options": [
        "Through food",
        "Through water",
        "Airborne through inhalation",
        "Through skin contact"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 56,
      "question": "NTBLCP stands for:",
      "options": [
        "National Tuberculosis Control Program",
        "National Tuberculosis, Leprosy and Buruli ulcer Control Program",
        "New Treatment for Lung Cancer Program",
        "National Training for Medical Personnel"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 57,
      "question": "Plaque accumulation leads to:",
      "options": [
        "Stronger teeth",
        "Better oral health",
        "Gum irritation and bleeding",
        "Whiter teeth"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 58,
      "question": "Health education is important for:",
      "options": [
        "Healthcare providers only",
        "Prevention and control of diseases",
        "Government officials only",
        "Researchers only"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "id": 59,
      "question": "Symptomatic treatment means:",
      "options": [
        "Ignoring symptoms",
        "Treating the underlying cause",
        "Treating the symptoms to provide relief",
        "Preventing symptoms"
      ],
      "correct": 2,
      "type": "mcq"
    },
    {
      "id": 60,
      "question": "Regular hand washing helps prevent:",
      "options": [
        "Only skin diseases",
        "Respiratory and other infections",
        "Only digestive problems",
        "Only eye infections"
      ],
      "correct": 1,
      "type": "mcq"
    },
    {
      "type": "mcq",
      "question": "Which of the following is NOT a sign or symptom of hypoglycemia?",
      "options": [
        "Perspiration",
        "Fatigue",
        "Headache",
        "Polyuria"
      ],
      "correct": 3,
      "explanation": "Polyuria is a symptom of hyperglycemia (diabetes), not hypoglycemia.",
      "id": 61
    },
    {
      "type": "mcq",
      "question": "What percentage of diabetes mellitus cases does NIDDM account for?",
      "options": [
        "50%",
        "70%",
        "90%",
        "95%"
      ],
      "correct": 2,
      "explanation": "NIDDM (Type 2) accounts for about 90% of all diabetes cases.",
      "id": 62
    },
    {
      "type": "mcq",
      "question": "Which oral hypoglycemic drug is also known as metformin?",
      "options": [
        "Glibenclamide",
        "Glucophage",
        "Chlorpropramide",
        "Glyburide"
      ],
      "correct": 1,
      "explanation": "Glucophage is the brand name for metformin.",
      "id": 63
    },
    {
      "type": "mcq",
      "question": "What is the leading cause of death in children under five years of age?",
      "options": [
        "Tuberculosis",
        "Pneumonia",
        "Dysentery",
        "Malaria"
      ],
      "correct": 1,
      "explanation": "Pneumonia is the leading cause of death in children under five years.",
      "id": 64
    },
    {
      "type": "mcq",
      "question": "Which of the following is the causative agent of tuberculosis?",
      "options": [
        "Streptococcus pneumoniae",
        "Mycobacterium tuberculosis",
        "Helicobacter pylori",
        "Shigella sonnei"
      ],
      "correct": 1,
      "explanation": "Mycobacterium tuberculosis is the causative agent of tuberculosis.",
      "id": 65
    },
    {
      "type": "mcq",
      "question": "What is the incubation period for tuberculosis?",
      "options": [
        "1-2 weeks",
        "2-10 weeks",
        "3-6 months",
        "6-12 months"
      ],
      "correct": 1,
      "explanation": "The incubation period for tuberculosis is 2-10 weeks.",
      "id": 66
    },
    {
      "type": "mcq",
      "question": "Which country is mentioned as having one of the highest TB burdens in the world?",
      "options": [
        "India",
        "China",
        "Nigeria",
        "South Africa"
      ],
      "correct": 2,
      "explanation": "Nigeria is mentioned as being among the 30 countries with the highest TB burden.",
      "id": 67
    },
    {
      "type": "mcq",
      "question": "What does NTBLCP stand for?",
      "options": [
        "National Tuberculosis and Leprosy Control Program",
        "Nigerian TB and Buruli Control Program",
        "National TB, Leprosy and Buruli Control Program",
        "National Tuberculosis, Leprosy and Buruli ulcer Control Program"
      ],
      "correct": 3,
      "explanation": "NTBLCP stands for National Tuberculosis, Leprosy and Buruli ulcer Control Program.",
      "id": 68
    },
    {
      "type": "mcq",
      "question": "Which of the following is NOT a viral cause of pneumonia mentioned?",
      "options": [
        "Influenza",
        "RSV",
        "SARS-COV-2",
        "Helicobacter pylori"
      ],
      "correct": 3,
      "explanation": "Helicobacter pylori is a bacterial cause of peptic ulcers, not a viral cause of pneumonia.",
      "id": 69
    },
    {
      "type": "mcq",
      "question": "What is the recommended dosage of Omeprazole for peptic ulcer treatment?",
      "options": [
        "10mg",
        "20mg",
        "40mg",
        "80mg"
      ],
      "correct": 1,
      "explanation": "The text mentions Omeprazole 20mg for peptic ulcer treatment.",
      "id": 70
    },
    {
      "type": "mcq",
      "question": "Which of the following is a classic triad of diabetes mellitus symptoms?",
      "options": [
        "Polyuria, Polydipsia, Polyphagia",
        "Fever, Cough, Dyspnea",
        "Headache, Confusion, Anxiety",
        "Nausea, Vomiting, Diarrhea"
      ],
      "correct": 0,
      "explanation": "The three 'polys' (polyuria, polydipsia, polyphagia) are classic diabetes symptoms.",
      "id": 71
    },
    {
      "type": "mcq",
      "question": "What type of diabetes requires insulin for life?",
      "options": [
        "Type 1 (IDDM)",
        "Type 2 (NIDDM)",
        "Gestational diabetes",
        "All types"
      ],
      "correct": 0,
      "explanation": "Type 1 diabetes (IDDM) patients require insulin for life due to beta-cell destruction.",
      "id": 72
    },
    {
      "type": "mcq",
      "question": "Which medication should be discouraged in peptic ulcer patients?",
      "options": [
        "Omeprazole",
        "Antibiotics",
        "ASA or NSAIDs",
        "Antacids"
      ],
      "correct": 2,
      "explanation": "ASA (Aspirin) and NSAIDs can worsen peptic ulcers and should be discontinued.",
      "id": 73
    },
    {
      "type": "mcq",
      "question": "What is the mode of transmission for tuberculosis?",
      "options": [
        "Contact transmission",
        "Airborne transmission",
        "Waterborne transmission",
        "Vector-borne transmission"
      ],
      "correct": 1,
      "explanation": "TB is transmitted through airborne inhalation of released TB germs.",
      "id": 74
    },
    {
      "type": "mcq",
      "question": "Which organism causes bacillary dysentery?",
      "options": [
        "Entamoeba histolytica",
        "Shigella species",
        "Vibrio cholerae",
        "Salmonella typhi"
      ],
      "correct": 1,
      "explanation": "Shigella species cause bacillary dysentery (Shigellosis).",
      "id": 75
    },
    {
      "type": "mcq",
      "question": "How many times per day can diarrhea occur in bacillary dysentery?",
      "options": [
        "5-10 times",
        "10-20 times",
        "20-30 times",
        "30-40 times"
      ],
      "correct": 1,
      "explanation": "The text mentions diarrhea containing red blood 10-20 times per day.",
      "id": 76
    },
    {
      "type": "mcq",
      "question": "What does CVD stand for?",
      "options": [
        "Cardiac Vascular Disease",
        "Cardiovascular Diseases",
        "Cerebrovascular Disease",
        "Coronary Vessel Disease"
      ],
      "correct": 1,
      "explanation": "CVD stands for Cardiovascular Diseases.",
      "id": 77
    },
    {
      "type": "mcq",
      "question": "Which of the following is NOT mentioned as a type of cardiovascular disease?",
      "options": [
        "Arrhythmias",
        "Coronary artery disease",
        "Heart failure",
        "Pneumonia"
      ],
      "correct": 3,
      "explanation": "Pneumonia is a respiratory infection, not a cardiovascular disease.",
      "id": 78
    },
    {
      "type": "mcq",
      "question": "What does CHF stand for in cardiovascular diseases?",
      "options": [
        "Coronary Heart Failure",
        "Congestive Heart Failure",
        "Chronic Heart Failure",
        "Cardiac Heart Function"
      ],
      "correct": 1,
      "explanation": "CHF commonly stands for Congestive Heart Failure.",
      "id": 79
    },
    {
      "type": "mcq",
      "question": "Which test is mentioned for diagnosing diabetes mellitus?",
      "options": [
        "Random blood sugar",
        "Fasting blood sugar test",
        "Urine test",
        "All of the above"
      ],
      "correct": 1,
      "explanation": "FBS (Fasting Blood Sugar) test is specifically mentioned for diagnosing diabetes.",
      "id": 80
    },
    {
      "type": "mcq",
      "question": "What should be avoided in dysentery prevention?",
      "options": [
        "Clean water",
        "Proper food storage",
        "Food contamination",
        "Hand washing"
      ],
      "correct": 2,
      "explanation": "Prevention of food contamination is crucial in dysentery prevention.",
      "id": 81
    },
    {
      "type": "mcq",
      "question": "Which hormone does the pancreas secrete to lower blood glucose?",
      "options": [
        "Glucagon",
        "Insulin",
        "Cortisol",
        "Adrenaline"
      ],
      "correct": 1,
      "explanation": "Insulin is secreted by the pancreas to convert glucose to glycogen, lowering blood glucose.",
      "id": 82
    },
    {
      "type": "mcq",
      "question": "What converts stored glucose back to glucose when blood glucose is low?",
      "options": [
        "Insulin",
        "Glucagon",
        "Cortisol",
        "Thyroxine"
      ],
      "correct": 1,
      "explanation": "Glucagon converts glycogen back to glucose when there's a reduction in blood glucose.",
      "id": 83
    },
    {
      "type": "mcq",
      "question": "Which age group is most commonly affected by NIDDM?",
      "options": [
        "Children",
        "Teenagers",
        "Over 40 years",
        "Over 65 years"
      ],
      "correct": 2,
      "explanation": "NIDDM is most common in obese people and those over 40 years of age.",
      "id": 84
    },
    {
      "type": "mcq",
      "question": "What can cause gestational diabetes?",
      "options": [
        "Exercise",
        "Diet",
        "Pregnancy",
        "Smoking"
      ],
      "correct": 2,
      "explanation": "Gestational diabetes occurs during pregnancy as mentioned in the text.",
      "id": 85
    },
    {
      "type": "mcq",
      "question": "Which of the following can lead to hypoglycemia?",
      "options": [
        "Overeating",
        "Accidental overdose of hypoglycemics",
        "Dehydration",
        "Hypertension"
      ],
      "correct": 1,
      "explanation": "Accidental overdose of hypoglycemic medications can cause hypoglycemia.",
      "id": 86
    },
    {
      "type": "mcq",
      "question": "What should patients do if they experience GIT problems while on hypoglycemics?",
      "options": [
        "Increase dose",
        "Stop medication immediately",
        "Continue medication",
        "Consult healthcare provider"
      ],
      "correct": 3,
      "explanation": "GIT problems like diarrhea and vomiting can affect medication absorption and require medical consultation.",
      "id": 87
    },
    {
      "type": "mcq",
      "question": "Which population is at higher risk for tuberculosis?",
      "options": [
        "Children only",
        "Elderly only",
        "Males more than females",
        "Females more than males"
      ],
      "correct": 2,
      "explanation": "The text states that TB burden is higher in males than females.",
      "id": 88
    },
    {
      "type": "mcq",
      "question": "What is the reservoir for tuberculosis?",
      "options": [
        "Animals",
        "Soil",
        "Human",
        "Water"
      ],
      "correct": 2,
      "explanation": "The text clearly states that the reservoir for tuberculosis is human.",
      "id": 89
    },
    {
      "type": "mcq",
      "question": "Which symptom is common to both tuberculosis and pneumonia?",
      "options": [
        "Night sweats",
        "Chest pain",
        "Weight loss",
        "Anorexia"
      ],
      "correct": 1,
      "explanation": "Chest pain is mentioned as a symptom for both tuberculosis and pneumonia.",
      "id": 90
    },
    {
      "type": "mcq",
      "question": "What is the primary prevention method for dysentery?",
      "options": [
        "Vaccination",
        "Antibiotics",
        "Safe water supply",
        "Isolation"
      ],
      "correct": 2,
      "explanation": "Provision of potable/safe water supply is mentioned as a key prevention method.",
      "id": 91
    },
    {
      "type": "mcq",
      "question": "Which of the following is a complication of peptic ulcer disease?",
      "options": [
        "Perforation",
        "Diabetes",
        "Hypertension",
        "Anemia only"
      ],
      "correct": 0,
      "explanation": "Perforation and gastrointestinal bleeding are mentioned as complications of peptic ulcers.",
      "id": 92
    },
    {
      "type": "mcq",
      "question": "What should be done for complicated peptic ulcers?",
      "options": [
        "Increase medication dose",
        "Home treatment",
        "Refer to surgical facility",
        "Dietary changes only"
      ],
      "correct": 2,
      "explanation": "The text mentions referring to a surgical facility for complicated ulcers.",
      "id": 93
    },
    {
      "type": "mcq",
      "question": "Which diagnostic test involves examining stools/faeces?",
      "options": [
        "Diabetes diagnosis",
        "Tuberculosis diagnosis",
        "Dysentery diagnosis",
        "Pneumonia diagnosis"
      ],
      "correct": 2,
      "explanation": "Disinfection of stools/faeces is mentioned in dysentery management, implying stool examination.",
      "id": 94
    },
    {
      "type": "mcq",
      "question": "What does NPO mean in medical terms?",
      "options": [
        "No Patient Orders",
        "Nothing Per Oral",
        "New Patient Only",
        "No Physical Operation"
      ],
      "correct": 1,
      "explanation": "NPO means Nothing Per Oral (nothing by mouth), mentioned in peptic ulcer treatment.",
      "id": 95
    },
    {
      "type": "mcq",
      "question": "Which of the following routes of transmission applies to dysentery?",
      "options": [
        "Airborne",
        "Faeco-oral route",
        "Blood-borne",
        "Sexual transmission"
      ],
      "correct": 1,
      "explanation": "The text mentions faeco-oral route or intestino-oral route for dysentery transmission.",
      "id": 96
    },
    {
      "type": "mcq",
      "question": "What is the main goal of health education in diabetes management?",
      "options": [
        "Medication compliance only",
        "Diet control only",
        "Preventing hypoglycemia",
        "All of the above"
      ],
      "correct": 3,
      "explanation": "Health education covers medication use, diet, and prevention of hypoglycemia complications.",
      "id": 97
    },
    {
      "type": "mcq",
      "question": "Which condition can be symptomatic or asymptomatic according to the text?",
      "options": [
        "Diabetes",
        "Tuberculosis",
        "Cardiovascular diseases",
        "Pneumonia"
      ],
      "correct": 2,
      "explanation": "The text mentions that cardiovascular diseases can be symptomatic or asymptomatic.",
      "id": 98
    },
    {
      "type": "mcq",
      "question": "What is emphasized as important for tuberculosis treatment success?",
      "options": [
        "High-dose antibiotics",
        "Isolation only",
        "Early detection and prompt treatment",
        "Surgery"
      ],
      "correct": 2,
      "explanation": "The text emphasizes that TB is curable if patients are detected early and treated promptly.",
      "id": 99
    },
    {
      "type": "mcq",
      "question": "Which factor is mentioned as contributing to peptic ulcer disease?",
      "options": [
        "Exercise",
        "Psychological stress",
        "Cold weather",
        "Bright lights"
      ],
      "correct": 1,
      "explanation": "Psychological stress is listed as one of the factors contributing to peptic ulcer disease.",
      "id": 100
    },
    {
      "question": "What does TB stand for in medical terminology?",
      "options": [
        "Tuberculosis",
        "Throat Bacteria",
        "Tracheal Bronchitis",
        "Thoracic Blockage"
      ],
      "correct": 0,
      "id": 101
    },
    {
      "question": "Which test is currently the first-line test for diagnosis of all forms of tuberculosis?",
      "options": [
        "Chest X-ray",
        "Gene Xpert test",
        "Sputum microscopy",
        "Tuberculin skin test"
      ],
      "correct": 1,
      "id": 102
    },
    {
      "question": "What does DOT stand for in TB treatment?",
      "options": [
        "Direct Observation Therapy",
        "Directly Observed Treatment",
        "Daily Oral Tablets",
        "Direct Oral Therapy"
      ],
      "correct": 1,
      "id": 103
    },
    {
      "question": "Which drug is mentioned as part of the NTBLCP treatment regimen for TB?",
      "options": [
        "Penicillin",
        "Rifampicin",
        "Amoxicillin",
        "Cephalexin"
      ],
      "correct": 1,
      "id": 104
    },
    {
      "question": "What is the incubation period for diphtheria?",
      "options": [
        "1-2 days",
        "3-5 days",
        "7-10 days",
        "2-3 weeks"
      ],
      "correct": 1,
      "id": 105
    },
    {
      "question": "Diphtheria is caused by which organism?",
      "options": [
        "Streptococcus",
        "Corynebacterium diphtheriae",
        "Staphylococcus",
        "Mycobacterium"
      ],
      "correct": 1,
      "id": 106
    },
    {
      "question": "What is the characteristic sign of diphtheria in the throat?",
      "options": [
        "Red swelling",
        "White patches",
        "Grey, tough and sticky false membrane",
        "Yellow discharge"
      ],
      "correct": 2,
      "id": 107
    },
    {
      "question": "Which age group is at highest risk for pertussis complications?",
      "options": [
        "Teenagers",
        "Adults",
        "Children under 2 years",
        "Elderly"
      ],
      "correct": 2,
      "id": 108
    },
    {
      "question": "Pertussis is also known as:",
      "options": [
        "Croup",
        "Whooping cough",
        "Strep throat",
        "Bronchitis"
      ],
      "correct": 1,
      "id": 109
    },
    {
      "question": "What type of cough is characteristic of pertussis?",
      "options": [
        "Dry cough",
        "Productive cough",
        "Barking cough",
        "Paroxysmal uncontrollable coughing"
      ],
      "correct": 3,
      "id": 110
    },
    {
      "question": "Asthma is primarily a disorder of which system?",
      "options": [
        "Cardiovascular",
        "Respiratory tract (airways)",
        "Nervous system",
        "Digestive system"
      ],
      "correct": 1,
      "id": 111
    },
    {
      "question": "What makes breathing difficult in asthma?",
      "options": [
        "Lung collapse",
        "Fluid in lungs",
        "Narrowness and excessive mucus production",
        "Chest muscle weakness"
      ],
      "correct": 2,
      "id": 112
    },
    {
      "question": "Which of the following is NOT a precipitating factor for asthma?",
      "options": [
        "Allergens",
        "Exercise",
        "Strong emotions",
        "Low blood pressure"
      ],
      "correct": 3,
      "id": 113
    },
    {
      "question": "In a mild to moderate asthma attack, the respiratory rate in a child >5 years is:",
      "options": [
        "<30 breaths/min",
        "<40 breaths/min",
        "<50 breaths/min",
        ">50 breaths/min"
      ],
      "correct": 0,
      "id": 114
    },
    {
      "question": "What oxygen saturation level indicates a severe asthma attack?",
      "options": [
        ">95%",
        "92-95%",
        "<92%",
        "<85%"
      ],
      "correct": 2,
      "id": 115
    },
    {
      "question": "Which position should an asthma patient be placed in during treatment?",
      "options": [
        "Lying flat",
        "Semi-recline position (Cardiac position)",
        "Head down position",
        "Side lying"
      ],
      "correct": 1,
      "id": 116
    },
    {
      "question": "Salbutamol is given via aerosol in what frequency during the first hour?",
      "options": [
        "Every 30 minutes",
        "2-3 puffs every 20-30 minutes",
        "Every hour",
        "Continuously"
      ],
      "correct": 1,
      "id": 117
    },
    {
      "question": "Wheezing is described as:",
      "options": [
        "Low-pitched sound",
        "High-pitched whistling sound",
        "Rattling sound",
        "Silent breathing"
      ],
      "correct": 1,
      "id": 118
    },
    {
      "question": "Rales are:",
      "options": [
        "Wheezing sounds",
        "Clicking or rattling sounds on inhalation",
        "High-pitched sounds",
        "Normal breath sounds"
      ],
      "correct": 1,
      "id": 119
    },
    {
      "question": "GERD stands for:",
      "options": [
        "Gastric Emergency Reflux Disease",
        "Gastro Esophageal Reflux Disease",
        "General Esophageal Respiratory Disorder",
        "Gastric Epithelial Reflux Disorder"
      ],
      "correct": 1,
      "id": 120
    },
    {
      "question": "GERD occurs when:",
      "options": [
        "Food moves too fast",
        "Stomach contents leak backward into the esophagus",
        "Esophagus becomes blocked",
        "Stomach produces too little acid"
      ],
      "correct": 1,
      "id": 121
    },
    {
      "question": "GERD can be relieved with:",
      "options": [
        "Antibiotics only",
        "Surgery only",
        "Antacids, Aluminum hydroxide, Omeprazole or cimetidine",
        "Pain medications"
      ],
      "correct": 2,
      "id": 122
    },
    {
      "question": "PUD stands for:",
      "options": [
        "Peptic Ulcer Disease",
        "Primary Ulcer Disorder",
        "Post-meal Ulcer Disease",
        "Persistent Upper Disease"
      ],
      "correct": 0,
      "id": 123
    },
    {
      "question": "A peptic ulcer is:",
      "options": [
        "Stomach cancer",
        "A sore on the lining of the stomach or duodenum",
        "Acid reflux",
        "Food poisoning"
      ],
      "correct": 1,
      "id": 124
    },
    {
      "question": "Which bacteria is associated with peptic ulcer disease?",
      "options": [
        "E. coli",
        "Helicobacter pylori",
        "Streptococcus",
        "Staphylococcus"
      ],
      "correct": 1,
      "id": 125
    },
    {
      "question": "Black, tarry stools in peptic ulcer disease indicate:",
      "options": [
        "Normal digestion",
        "Blood in stool",
        "Medication side effect",
        "Dietary changes needed"
      ],
      "correct": 1,
      "id": 126
    },
    {
      "question": "Which medication should be discouraged in peptic ulcer treatment?",
      "options": [
        "Antacids",
        "ASA (Aspirin) or NSAIDs",
        "Omeprazole",
        "Antibiotics"
      ],
      "correct": 1,
      "id": 127
    },
    {
      "question": "In complicated ulcers with perforation, the patient should be:",
      "options": [
        "Given oral fluids",
        "Referred to surgical facility",
        "Treated with antacids only",
        "Sent home with medication"
      ],
      "correct": 1,
      "id": 128
    },
    {
      "question": "Dysentery is characterized by:",
      "options": [
        "Normal bowel movements",
        "Diarrhea with blood and mucus",
        "Constipation",
        "Nausea only"
      ],
      "correct": 1,
      "id": 129
    },
    {
      "question": "Amoebic dysentery is caused by:",
      "options": [
        "Virus",
        "Bacteria",
        "Parasitic intestinal protozoa called Entamoeba histolytica",
        "Fungus"
      ],
      "correct": 2,
      "id": 130
    },
    {
      "question": "Which of the following is a complication of amoebic dysentery?",
      "options": [
        "Diabetes",
        "Amoebic hepatitis and abscesses",
        "Heart disease",
        "Kidney stones"
      ],
      "correct": 1,
      "id": 131
    },
    {
      "question": "Bacillary dysentery is caused by:",
      "options": [
        "Amoeba",
        "Shigella species",
        "Virus",
        "Fungus"
      ],
      "correct": 1,
      "id": 132
    },
    {
      "question": "The most severe type of Shigella dysentery is:",
      "options": [
        "S. Flexneri",
        "S. Boydii",
        "S. Sonnei",
        "S. Dysenteriae"
      ],
      "correct": 3,
      "id": 133
    },
    {
      "question": "How many times per day can diarrhea occur in bacillary dysentery?",
      "options": [
        "5-10 times",
        "10-20 times",
        "20-30 times",
        "Over 30 times"
      ],
      "correct": 1,
      "id": 134
    },
    {
      "question": "Dysentery can be transmitted through:",
      "options": [
        "Air only",
        "Faeco-oral route",
        "Blood transfusion",
        "Skin contact only"
      ],
      "correct": 1,
      "id": 135
    },
    {
      "question": "Which drug combination is used for H. pylori eradication?",
      "options": [
        "Penicillin and aspirin",
        "Metronidazole and amoxicillin",
        "Paracetamol and ibuprofen",
        "Antacids only"
      ],
      "correct": 1,
      "id": 136
    },
    {
      "question": "TB treatment requires what kind of patient monitoring?",
      "options": [
        "No monitoring needed",
        "Monthly check-ups only",
        "Right drugs, right doses, right time under supervision",
        "Self-medication"
      ],
      "correct": 2,
      "id": 137
    },
    {
      "question": "Which is NOT a prevention method for TB?",
      "options": [
        "BCG vaccination",
        "Avoid overcrowding",
        "Use of face masks",
        "Taking antibiotics daily"
      ],
      "correct": 3,
      "id": 138
    },
    {
      "question": "Diphtheria prevention includes:",
      "options": [
        "Antibiotics only",
        "Routine pentavalent immunization",
        "Isolation only",
        "No prevention available"
      ],
      "correct": 1,
      "id": 139
    },
    {
      "question": "What intervention may be necessary for severe diphtheria?",
      "options": [
        "Oral medication only",
        "Intubation or tracheotomy",
        "Physical therapy",
        "Diet changes"
      ],
      "correct": 1,
      "id": 140
    },
    {
      "question": "Pertussis prevention includes immunization with:",
      "options": [
        "BCG vaccine",
        "Pentavalent vaccine",
        "Hepatitis vaccine",
        "Polio vaccine"
      ],
      "correct": 1,
      "id": 141
    },
    {
      "question": "In severe asthma, the patient cannot:",
      "options": [
        "Walk slowly",
        "Sit up",
        "Complete a sentence in one breath",
        "Sleep"
      ],
      "correct": 2,
      "id": 142
    },
    {
      "question": "Hydrocortisone injection is used in asthma for:",
      "options": [
        "Mild cases",
        "Moderate cases",
        "Severe cases",
        "Prevention only"
      ],
      "correct": 2,
      "id": 143
    },
    {
      "question": "Rhonchi breath sounds resemble:",
      "options": [
        "Whistling",
        "Snoring",
        "Clicking",
        "Silence"
      ],
      "correct": 1,
      "id": 144
    },
    {
      "question": "Stridor sounds are:",
      "options": [
        "Low-pitched",
        "High-pitched and loud",
        "Silent",
        "Normal"
      ],
      "correct": 1,
      "id": 145
    },
    {
      "question": "Weight is important in TB treatment because:",
      "options": [
        "It affects appetite",
        "It determines dosage",
        "It shows recovery",
        "It prevents side effects"
      ],
      "correct": 1,
      "id": 146
    },
    {
      "question": "Extra-pulmonary TB affects:",
      "options": [
        "Only lungs",
        "Any other part of the body besides lungs",
        "Only throat",
        "Only stomach"
      ],
      "correct": 1,
      "id": 147
    },
    {
      "question": "Drug-resistant TB requires:",
      "options": [
        "Same treatment",
        "Special treatment regimens",
        "No treatment",
        "Only surgical intervention"
      ],
      "correct": 1,
      "id": 148
    },
    {
      "question": "The intensive phase of TB treatment typically lasts:",
      "options": [
        "2 months",
        "4 months",
        "6 months",
        "8 months"
      ],
      "correct": 0,
      "id": 149
    },
    {
      "question": "Continuation phase of TB treatment lasts:",
      "options": [
        "2 months",
        "4 months",
        "6 months",
        "8 months"
      ],
      "correct": 1,
      "id": 150
    },
    {
      "question": "Adequate nutrition is important in TB because:",
      "options": [
        "It prevents hunger",
        "It boosts immune system",
        "It improves appetite",
        "It reduces medication side effects"
      ],
      "correct": 1,
      "id": 151
    },
    {
      "question": "Early identification of TB cases is important for:",
      "options": [
        "Hospital management",
        "Cost reduction",
        "Prompt provision of services",
        "Research purposes"
      ],
      "correct": 2,
      "id": 152
    },
    {
      "question": "Cough etiquette helps prevent:",
      "options": [
        "Only TB",
        "Only diphtheria",
        "Airborne disease transmission",
        "Only pertussis"
      ],
      "correct": 2,
      "id": 153
    },
    {
      "question": "Personal protective measures include:",
      "options": [
        "Face masks only",
        "Hand washing only",
        "Face masks and hand hygiene",
        "Isolation only"
      ],
      "correct": 2,
      "id": 154
    },
    {
      "question": "Adequate ventilation helps:",
      "options": [
        "Save energy",
        "Reduce airborne transmission",
        "Improve comfort only",
        "Reduce noise"
      ],
      "correct": 1,
      "id": 155
    },
    {
      "question": "Which factor does NOT cause peptic ulcers?",
      "options": [
        "H. pylori infection",
        "NSAIDs",
        "Heavy alcohol",
        "Regular exercise"
      ],
      "correct": 3,
      "id": 156
    },
    {
      "question": "Psychological stress can:",
      "options": [
        "Cure ulcers",
        "Contribute to peptic ulcers",
        "Prevent ulcers",
        "Have no effect on ulcers"
      ],
      "correct": 1,
      "id": 157
    },
    {
      "question": "Smoking affects peptic ulcers by:",
      "options": [
        "Healing them",
        "Having no effect",
        "Contributing to their development",
        "Preventing them"
      ],
      "correct": 2,
      "id": 158
    },
    {
      "question": "Haematemesis means:",
      "options": [
        "Blood in urine",
        "Blood in stool",
        "Vomiting blood",
        "Blood in saliva"
      ],
      "correct": 2,
      "id": 159
    },
    {
      "question": "Bloating in peptic ulcer disease is:",
      "options": [
        "Always severe",
        "A common symptom",
        "Never occurs",
        "Only in children"
      ],
      "correct": 1,
      "id": 160
    },
    {
      "question": "NPO in ulcer treatment means:",
      "options": [
        "New Patient Orders",
        "Nothing Per Oral",
        "Normal Patient Outcome",
        "No Persistent Obstruction"
      ],
      "correct": 1,
      "id": 161
    },
    {
      "question": "The _______ test can detect both mycobacterium (MTB) and drug-resistant TB in less than _______ hours.",
      "answers": [
        "Gene Xpert",
        "2"
      ],
      "id": 162
    },
    {
      "question": "TB treatment is achieved through _______ which means the patient swallows the right drugs, in the right doses, at the right time under the supervision of a _______.",
      "answers": [
        "DOT",
        "health worker"
      ],
      "id": 163
    },
    {
      "question": "Diphtheria usually affects the mucous membrane of the _______ and throat, manifesting as either a respiratory tract or _______ infection.",
      "answers": [
        "nose",
        "cutaneous"
      ],
      "id": 164
    },
    {
      "question": "The incubation period for diphtheria is _______ to _______ days.",
      "answers": [
        "3",
        "5"
      ],
      "id": 165
    },
    {
      "question": "Pertussis affects all age groups, but the majority of cases arise in _______-_______ individuals.",
      "answers": [
        "non",
        "vaccinated"
      ],
      "id": 166
    },
    {
      "question": "Children under the age of _______ are at highest risk for pertussis complications and _______.",
      "answers": [
        "2",
        "death"
      ],
      "id": 167
    },
    {
      "question": "In a severe asthma attack, the patient cannot complete a _______ in one breath, or has _______ breaths per minute.",
      "answers": [
        "sentence",
        "100"
      ],
      "id": 168
    },
    {
      "question": "GERD occurs when stomach contents leak _______ from the stomach into the _______.",
      "answers": [
        "backward",
        "esophagus"
      ],
      "id": 169
    },
    {
      "question": "Peptic ulcer disease is a sore on the lining of the _______ or the first part of the small intestine called _______.",
      "answers": [
        "stomach",
        "duodenum"
      ],
      "id": 170
    },
    {
      "question": "Amoebic dysentery is caused by a parasitic intestinal protozoa called _______ _______.",
      "answers": [
        "Entamoeba",
        "histolytica"
      ],
      "id": 171
    },
    {
      "type": "mcq",
      "question": "What is arrhythmia?",
      "options": [
        "A condition where the heart beats with regular rhythm",
        "A condition where the heart beats with irregular or abnormal rhythm",
        "A condition affecting only the lungs",
        "A type of blood disorder"
      ],
      "correct": 1,
      "id": 172
    },
    {
      "type": "mcq",
      "question": "Tachycardia is defined as a heart rate greater than:",
      "options": [
        "60 bpm",
        "80 bpm",
        "100 bpm",
        "120 bpm"
      ],
      "correct": 2,
      "id": 173
    },
    {
      "type": "mcq",
      "question": "Bradycardia is defined as a resting heart rate less than:",
      "options": [
        "60 bpm",
        "70 bpm",
        "80 bpm",
        "50 bpm"
      ],
      "correct": 0,
      "id": 174
    },
    {
      "type": "mcq",
      "question": "Which of the following is NOT a cause of arrhythmia?",
      "options": [
        "High blood pressure",
        "Cardiomyopathy",
        "Healthy diet",
        "Coronary heart disease"
      ],
      "correct": 2,
      "id": 175
    },
    {
      "type": "mcq",
      "question": "Atrial fibrillation (A-fib) causes:",
      "options": [
        "Slow heart rate",
        "Rapid uncoordinated heart rate",
        "Normal heart rhythm",
        "Complete heart block"
      ],
      "correct": 1,
      "id": 176
    },
    {
      "type": "mcq",
      "question": "Ventricular fibrillation occurs when:",
      "options": [
        "The atria contract normally",
        "The heart beats too slowly",
        "Rapid, chaotic electrical signals cause the lower chambers to quiver",
        "Blood pressure increases"
      ],
      "correct": 2,
      "id": 177
    },
    {
      "type": "mcq",
      "question": "Heart failure is also known as:",
      "options": [
        "Cardiac arrest",
        "Congestive heart failure (CHF)",
        "Heart attack",
        "Arrhythmia"
      ],
      "correct": 1,
      "id": 178
    },
    {
      "type": "mcq",
      "question": "Which is a sign of left-sided cardiac failure?",
      "options": [
        "Pedal oedema",
        "Ascites",
        "Pulmonary congestion",
        "Hepatomegaly"
      ],
      "correct": 2,
      "id": 179
    },
    {
      "type": "mcq",
      "question": "Paroxysmal nocturnal dyspnoea (PND) is associated with:",
      "options": [
        "Right-sided heart failure",
        "Left-sided heart failure",
        "Kidney disease",
        "Lung cancer"
      ],
      "correct": 1,
      "id": 180
    },
    {
      "type": "mcq",
      "question": "Which is a symptom of right-sided cardiac failure?",
      "options": [
        "Cough with frothy pink sputum",
        "Bronchial wheezing",
        "Pedal oedema",
        "Palpitation"
      ],
      "correct": 2,
      "id": 181
    },
    {
      "type": "mcq",
      "question": "Anemia is defined as:",
      "options": [
        "High red blood cell count",
        "Inability of blood to carry enough oxygen to meet body needs",
        "Excess white blood cells",
        "High platelet count"
      ],
      "correct": 1,
      "id": 182
    },
    {
      "type": "mcq",
      "question": "Iron deficiency anemia can result from all EXCEPT:",
      "options": [
        "Insufficient intake in older adults",
        "Malabsorption",
        "High requirement during pregnancy",
        "Excessive vitamin C intake"
      ],
      "correct": 3,
      "id": 183
    },
    {
      "type": "mcq",
      "question": "Hemolytic anemia occurs when:",
      "options": [
        "Red blood cells are produced normally",
        "Circulating red cells are destroyed prematurely",
        "Iron levels are high",
        "White blood cells increase"
      ],
      "correct": 1,
      "id": 184
    },
    {
      "type": "mcq",
      "question": "For mild anemia, the PCV is between:",
      "options": [
        "25-29%",
        "20-24%",
        "Less than 20%",
        "30-35%"
      ],
      "correct": 0,
      "id": 185
    },
    {
      "type": "mcq",
      "question": "Severe anemia has a PCV of:",
      "options": [
        "25-29%",
        "20-24%",
        "Less than 20%",
        "More than 30%"
      ],
      "correct": 2,
      "id": 186
    },
    {
      "type": "mcq",
      "question": "Leukopenia is defined as total blood leukocyte count less than:",
      "options": [
        "4 × 10⁹/L",
        "5 × 10⁹/L",
        "6 × 10⁹/L",
        "3 × 10⁹/L"
      ],
      "correct": 0,
      "id": 187
    },
    {
      "type": "mcq",
      "question": "Which white blood cell type destroys bacteria and viruses?",
      "options": [
        "Lymphocytes",
        "Neutrophils",
        "Monocytes",
        "Eosinophils"
      ],
      "correct": 1,
      "id": 188
    },
    {
      "type": "mcq",
      "question": "The normal range for neutrophils is:",
      "options": [
        "1.5-3.5 × 10⁹/L",
        "2.5-7.5 × 10⁹/L",
        "0.2-0.8 × 10⁹/L",
        "0.4-0.44 × 10⁹/L"
      ],
      "correct": 1,
      "id": 189
    },
    {
      "type": "mcq",
      "question": "Leukemia is:",
      "options": [
        "A benign blood condition",
        "Malignant proliferation of white blood cell precursors",
        "Decreased white blood cells",
        "High red blood cell count"
      ],
      "correct": 1,
      "id": 190
    },
    {
      "type": "mcq",
      "question": "Thrombocytopenia is defined as platelet count below:",
      "options": [
        "200 × 10⁹/L",
        "150 × 10⁹/L",
        "300 × 10⁹/L",
        "100 × 10⁹/L"
      ],
      "correct": 1,
      "id": 191
    },
    {
      "type": "mcq",
      "question": "Reduced platelet production can be due to:",
      "options": [
        "Ionising radiation",
        "Leukemia",
        "Cytotoxic drugs",
        "All of the above"
      ],
      "correct": 3,
      "id": 192
    },
    {
      "type": "mcq",
      "question": "Increased platelet destruction can be caused by:",
      "options": [
        "Vitamin K deficiency",
        "DIC (Disseminated intravascular coagulation)",
        "Radiation",
        "Leukemia"
      ],
      "correct": 1,
      "id": 193
    },
    {
      "type": "mcq",
      "question": "Musculoskeletal disorders affect the:",
      "options": [
        "Heart and lungs only",
        "Muscles, nerves, tendons, joints, cartilage and spinal discs",
        "Brain only",
        "Digestive system only"
      ],
      "correct": 1,
      "id": 194
    },
    {
      "type": "mcq",
      "question": "How many conditions comprise musculoskeletal disorders?",
      "options": [
        "More than 100",
        "More than 150",
        "Less than 50",
        "Exactly 100"
      ],
      "correct": 1,
      "id": 195
    },
    {
      "type": "mcq",
      "question": "The main contributor to overall burden of musculoskeletal disease is:",
      "options": [
        "Neck pain",
        "Shoulder pain",
        "Low back pain",
        "Knee pain"
      ],
      "correct": 2,
      "id": 196
    },
    {
      "type": "mcq",
      "question": "Which is NOT a common cause of musculoskeletal pain?",
      "options": [
        "Bone fractures",
        "Joint dislocation",
        "Poor posture",
        "Healthy exercise"
      ],
      "correct": 3,
      "id": 197
    },
    {
      "type": "mcq",
      "question": "Supraventricular tachycardia starts:",
      "options": [
        "In the lower heart chambers",
        "Above the lower heart chambers (ventricles)",
        "In the aorta",
        "In the lungs"
      ],
      "correct": 1,
      "id": 198
    },
    {
      "type": "mcq",
      "question": "Sick sinus syndrome affects:",
      "options": [
        "The aorta",
        "The lungs",
        "The sinus node responsible for heart pacing",
        "The kidneys"
      ],
      "correct": 2,
      "id": 199
    },
    {
      "type": "mcq",
      "question": "Conduction block can cause:",
      "options": [
        "Only fast heart rate",
        "Only slow heart rate",
        "Signals to slow down, stop, or cause skipped beats",
        "No effect on heart rate"
      ],
      "correct": 2,
      "id": 200
    },
    {
      "type": "mcq",
      "question": "Which symptom is associated with arrhythmias?",
      "options": [
        "Perfect vision",
        "Fluttering in chest (feeling of skipped heartbeats)",
        "Increased appetite",
        "Better sleep"
      ],
      "correct": 1,
      "id": 201
    },
    {
      "type": "mcq",
      "question": "Acute cardiac failure can be caused by:",
      "options": [
        "Malignant hypertension",
        "Coronary heart disease",
        "Pulmonary embolism",
        "All of the above"
      ],
      "correct": 3,
      "id": 202
    },
    {
      "type": "mcq",
      "question": "Chronic cardiac failure can be caused by:",
      "options": [
        "Severe anemia",
        "Aging",
        "Myocardial fibrosis",
        "All of the above"
      ],
      "correct": 3,
      "id": 203
    },
    {
      "type": "mcq",
      "question": "Cyanosis in left-sided heart failure indicates:",
      "options": [
        "Good oxygen levels",
        "Poor oxygenation",
        "High blood pressure",
        "Normal heart function"
      ],
      "correct": 1,
      "id": 204
    },
    {
      "type": "mcq",
      "question": "Jugular vein distension is a sign of:",
      "options": [
        "Left-sided heart failure",
        "Right-sided heart failure",
        "Normal circulation",
        "Low blood pressure"
      ],
      "correct": 1,
      "id": 205
    },
    {
      "type": "mcq",
      "question": "Blood disorders interfere with blood's ability to:",
      "options": [
        "Circulate only",
        "Function correctly",
        "Change color",
        "Increase in volume"
      ],
      "correct": 1,
      "id": 206
    },
    {
      "type": "mcq",
      "question": "Anemia involving red blood cells includes:",
      "options": [
        "Sickle cell anemia",
        "Thalassemia",
        "Aplastic anemia",
        "All of the above"
      ],
      "correct": 3,
      "id": 207
    },
    {
      "type": "mcq",
      "question": "Leukopenia involves:",
      "options": [
        "Red blood cells",
        "White blood cells",
        "Platelets",
        "Plasma"
      ],
      "correct": 1,
      "id": 208
    },
    {
      "type": "mcq",
      "question": "Vitamin B12 and folic acid deficiency causes:",
      "options": [
        "Iron deficiency anemia",
        "Hemolytic anemia",
        "Megaloblastic anemia",
        "Aplastic anemia"
      ],
      "correct": 2,
      "id": 209
    },
    {
      "type": "mcq",
      "question": "Aplastic anemia results from:",
      "options": [
        "Iron deficiency",
        "Bone marrow failure",
        "Vitamin deficiency",
        "Blood loss"
      ],
      "correct": 1,
      "id": 210
    },
    {
      "type": "mcq",
      "question": "Normal platelet count range is:",
      "options": [
        "100-200 × 10⁹/L",
        "200-350 × 10⁹/L",
        "50-150 × 10⁹/L",
        "350-500 × 10⁹/L"
      ],
      "correct": 1,
      "id": 211
    },
    {
      "type": "mcq",
      "question": "Lymphocytes are responsible for:",
      "options": [
        "Destroying bacteria only",
        "Killing viruses and regulating immune system",
        "Blood clotting",
        "Oxygen transport"
      ],
      "correct": 1,
      "id": 212
    },
    {
      "type": "mcq",
      "question": "Monocytes or macrophages function to:",
      "options": [
        "Transport oxygen",
        "Eat dead or deactivated bacteria, viruses and fungi",
        "Form blood clots",
        "Regulate heart rate"
      ],
      "correct": 1,
      "id": 213
    },
    {
      "type": "mcq",
      "question": "Eosinophils help the body respond to:",
      "options": [
        "Bacterial infections only",
        "Viral infections only",
        "Allergic reactions and help destroy parasites",
        "Blood clotting"
      ],
      "correct": 2,
      "id": 214
    },
    {
      "type": "mcq",
      "question": "Common causes of leukopenia include:",
      "options": [
        "Cytotoxic drugs",
        "Phenothiazines",
        "Radiation damage to bone marrow",
        "All of the above"
      ],
      "correct": 3,
      "id": 215
    },
    {
      "type": "mcq",
      "question": "Signs of leukemia include:",
      "options": [
        "Fatigue",
        "Fever or night sweat",
        "Bone/joint pain",
        "All of the above"
      ],
      "correct": 3,
      "id": 216
    },
    {
      "type": "mcq",
      "question": "Leukocytosis occurs as a normal protective reaction in:",
      "options": [
        "Sleep",
        "Pathological conditions, especially infection",
        "Normal digestion",
        "Rest"
      ],
      "correct": 1,
      "id": 217
    },
    {
      "type": "mcq",
      "question": "Musculoskeletal conditions that affect joints include:",
      "options": [
        "Osteoarthritis",
        "Rheumatoid arthritis",
        "Psoriatic arthritis",
        "All of the above"
      ],
      "correct": 3,
      "id": 218
    },
    {
      "type": "mcq",
      "question": "Conditions affecting bones include:",
      "options": [
        "Osteoporosis",
        "Osteopenia",
        "Traumatic fractures",
        "All of the above"
      ],
      "correct": 3,
      "id": 219
    },
    {
      "type": "mcq",
      "question": "Muscle-related conditions include:",
      "options": [
        "Sarcopenia",
        "Muscle strain",
        "Muscle spasms",
        "All of the above"
      ],
      "correct": 3,
      "id": 220
    },
    {
      "type": "mcq",
      "question": "Spine-related conditions include:",
      "options": [
        "Back pain",
        "Neck pain",
        "Disc problems",
        "All of the above"
      ],
      "correct": 3,
      "id": 221
    },
    {
      "type": "mcq",
      "question": "Tendon and ligament injuries include:",
      "options": [
        "Sprains",
        "Strains",
        "Dislocation",
        "All of the above"
      ],
      "correct": 3,
      "id": 222
    },
    {
      "type": "mcq",
      "question": "Systemic conditions affecting multiple body areas include:",
      "options": [
        "Systemic Lupus Erythematosus",
        "Fibromyalgia",
        "Rheumatoid arthritis",
        "All of the above"
      ],
      "correct": 3,
      "id": 223
    },
    {
      "type": "mcq",
      "question": "Common symptoms of musculoskeletal disorders include:",
      "options": [
        "Pain that worsens with movement",
        "Sleep disturbances",
        "Muscle twitches",
        "All of the above"
      ],
      "correct": 3,
      "id": 224
    },
    {
      "type": "mcq",
      "question": "Fatigue in musculoskeletal disorders:",
      "options": [
        "Never occurs",
        "Is common and affects daily activities",
        "Only happens at night",
        "Is always mild"
      ],
      "correct": 1,
      "id": 225
    },
    {
      "type": "mcq",
      "question": "Burning sensation in muscles is:",
      "options": [
        "Always normal",
        "Never significant",
        "A symptom of musculoskeletal disorder",
        "Only related to exercise"
      ],
      "correct": 2,
      "id": 226
    },
    {
      "type": "mcq",
      "question": "The normal range for lymphocytes is:",
      "options": [
        "2.5-7.5 × 10⁹/L",
        "1.5-3.5 × 10⁹/L",
        "0.2-0.8 × 10⁹/L",
        "0.4-0.44 × 10⁹/L"
      ],
      "correct": 1,
      "id": 227
    },
    {
      "type": "mcq",
      "question": "The normal range for monocytes is:",
      "options": [
        "2.5-7.5 × 10⁹/L",
        "1.5-3.5 × 10⁹/L",
        "0.2-0.8 × 10⁹/L",
        "0.4-0.44 × 10⁹/L"
      ],
      "correct": 2,
      "id": 228
    },
    {
      "type": "mcq",
      "question": "The normal range for eosinophils is:",
      "options": [
        "2.5-7.5 × 10⁹/L",
        "1.5-3.5 × 10⁹/L",
        "0.2-0.8 × 10⁹/L",
        "0.4-0.44 × 10⁹/L"
      ],
      "correct": 3,
      "id": 229
    },
    {
      "type": "mcq",
      "question": "The normal range for basophils is:",
      "options": [
        "0.015-0.1 × 10⁹/L",
        "1.5-3.5 × 10⁹/L",
        "0.2-0.8 × 10⁹/L",
        "2.5-7.5 × 10⁹/L"
      ],
      "correct": 0,
      "id": 230
    },
    {
      "type": "mcq",
      "question": "Electrocardiogram (ECG) is used to detect:",
      "options": [
        "Blood disorders",
        "Abnormal heart rhythm",
        "Bone fractures",
        "Lung problems"
      ],
      "correct": 1,
      "id": 231
    },
    {
      "type": "mcq",
      "question": "What is the normal platelet count range?",
      "options": [
        "50-100 × 10⁹/L",
        "150-350 × 10⁹/L",
        "200-500 × 10⁹/L",
        "100-200 × 10⁹/L"
      ],
      "correct": 1,
      "id": 232
    },
    {
      "type": "mcq",
      "question": "Thrombocytopenia is defined as a platelet count below:",
      "options": [
        "100 × 10⁹/L",
        "150 × 10⁹/L",
        "200 × 10⁹/L",
        "250 × 10⁹/L"
      ],
      "correct": 1,
      "id": 233
    },
    {
      "type": "mcq",
      "question": "Which of the following is NOT a sign of leukemia?",
      "options": [
        "Fatigue",
        "Fever or night sweat",
        "Bone/joint pain",
        "Increased appetite"
      ],
      "correct": 3,
      "id": 234
    },
    {
      "type": "mcq",
      "question": "Which condition is characterized by increased platelet destruction?",
      "options": [
        "Bone marrow deficiency",
        "Ionizing radiation",
        "Leukemia",
        "Thrombocytopenia"
      ],
      "correct": 3,
      "id": 235
    },
    {
      "type": "mcq",
      "question": "What does DIC stand for?",
      "options": [
        "Direct Intravascular Coagulation",
        "Disseminated Intravascular Coagulation",
        "Decreased Intravascular Circulation",
        "Diluted Intravascular Components"
      ],
      "correct": 1,
      "id": 236
    },
    {
      "type": "mcq",
      "question": "Which of the following is a common cause of musculoskeletal pain?",
      "options": [
        "Bone fractures",
        "Joint dislocation",
        "Poor posture",
        "All of the above"
      ],
      "correct": 3,
      "id": 237
    },
    {
      "type": "mcq",
      "question": "Musculoskeletal conditions comprise more than how many conditions?",
      "options": [
        "100",
        "150",
        "200",
        "250"
      ],
      "correct": 1,
      "id": 238
    },
    {
      "type": "mcq",
      "question": "Which symptom is characteristic of musculoskeletal disorders?",
      "options": [
        "Pain that worsens with movement",
        "Sleep disturbances",
        "Muscle twitches",
        "All of the above"
      ],
      "correct": 3,
      "id": 239
    },
    {
      "type": "mcq",
      "question": "What is the main contributor to the overall burden of musculoskeletal conditions?",
      "options": [
        "Arthritis",
        "Low back pain",
        "Osteoporosis",
        "Muscle strain"
      ],
      "correct": 1,
      "id": 240
    },
    {
      "type": "mcq",
      "question": "Which diagnostic test is used for musculoskeletal disorders?",
      "options": [
        "Blood tests",
        "CT scans",
        "MRI",
        "All of the above"
      ],
      "correct": 3,
      "id": 241
    },
    {
      "type": "mcq",
      "question": "Arthritis is defined as:",
      "options": [
        "Muscle inflammation",
        "Bone fracture",
        "Inflammation of one or more joints",
        "Nerve damage"
      ],
      "correct": 2,
      "id": 242
    },
    {
      "type": "mcq",
      "question": "Which type of arthritis is most common?",
      "options": [
        "Rheumatoid arthritis",
        "Osteoarthritis",
        "Psoriatic arthritis",
        "Gout"
      ],
      "correct": 1,
      "id": 243
    },
    {
      "type": "mcq",
      "question": "Osteoarthritis primarily affects:",
      "options": [
        "Young adults",
        "Children",
        "Elderly individuals",
        "Athletes only"
      ],
      "correct": 2,
      "id": 244
    },
    {
      "type": "mcq",
      "question": "Which joints are most commonly affected by osteoarthritis?",
      "options": [
        "Hands and wrists",
        "Knees, hips, and facet joints",
        "Shoulders and elbows",
        "Ankles and feet"
      ],
      "correct": 1,
      "id": 245
    },
    {
      "type": "mcq",
      "question": "Rheumatoid arthritis is characterized by:",
      "options": [
        "Cartilage breakdown",
        "Immune system attacking joints",
        "Age-related wear",
        "Injury-related damage"
      ],
      "correct": 1,
      "id": 246
    },
    {
      "type": "mcq",
      "question": "Which areas can rheumatoid arthritis affect besides joints?",
      "options": [
        "Skin and eyes",
        "Nerves",
        "Other body areas",
        "All of the above"
      ],
      "correct": 3,
      "id": 247
    },
    {
      "type": "mcq",
      "question": "Gout is caused by:",
      "options": [
        "Calcium deposits",
        "Uric acid crystals",
        "Bacterial infection",
        "Vitamin deficiency"
      ],
      "correct": 1,
      "id": 248
    },
    {
      "type": "mcq",
      "question": "Which joints does gout most commonly affect?",
      "options": [
        "Spine",
        "Big toe, knee, and wrist",
        "Shoulders",
        "Fingers"
      ],
      "correct": 1,
      "id": 249
    },
    {
      "type": "mcq",
      "question": "Myalgia is the medical term for:",
      "options": [
        "Joint pain",
        "Muscle pain",
        "Bone pain",
        "Nerve pain"
      ],
      "correct": 1,
      "id": 250
    },
    {
      "type": "mcq",
      "question": "Acute myalgia is typically:",
      "options": [
        "Long-lasting",
        "Short-lived and easily managed",
        "Chronic",
        "Permanent"
      ],
      "correct": 1,
      "id": 251
    },
    {
      "type": "mcq",
      "question": "Which is a common cause of acute myalgia?",
      "options": [
        "Exercise",
        "Exertion",
        "Illness",
        "All of the above"
      ],
      "correct": 3,
      "id": 252
    },
    {
      "type": "mcq",
      "question": "Chronic myalgia can be associated with:",
      "options": [
        "Fibromyalgia",
        "Rheumatoid arthritis",
        "Multiple sclerosis",
        "All of the above"
      ],
      "correct": 3,
      "id": 253
    },
    {
      "type": "mcq",
      "question": "Vitamin deficiency that can cause myalgia includes:",
      "options": [
        "Vitamin A",
        "Vitamin D and potassium",
        "Vitamin C",
        "Vitamin E"
      ],
      "correct": 1,
      "id": 254
    },
    {
      "type": "mcq",
      "question": "The diagnosis of myalgia involves:",
      "options": [
        "Medical history only",
        "Physical examination only",
        "Finding underlying condition",
        "Blood tests only"
      ],
      "correct": 2,
      "id": 255
    },
    {
      "type": "mcq",
      "question": "Treatment for acute myalgia includes:",
      "options": [
        "Resting the area",
        "OTC pain relievers",
        "Ice and heat therapy",
        "All of the above"
      ],
      "correct": 3,
      "id": 256
    },
    {
      "type": "mcq",
      "question": "The endocrine system is a network of:",
      "options": [
        "Muscles",
        "Glands",
        "Bones",
        "Nerves"
      ],
      "correct": 1,
      "id": 257
    },
    {
      "type": "mcq",
      "question": "The pituitary gland is often called:",
      "options": [
        "Master gland",
        "Control gland",
        "Primary gland",
        "Main gland"
      ],
      "correct": 0,
      "id": 258
    },
    {
      "type": "mcq",
      "question": "Which is NOT an endocrine gland?",
      "options": [
        "Thyroid",
        "Liver",
        "Adrenal gland",
        "Pancreas"
      ],
      "correct": 1,
      "id": 259
    },
    {
      "type": "mcq",
      "question": "Endocrine disorders are grouped into how many categories?",
      "options": [
        "One",
        "Two",
        "Three",
        "Four"
      ],
      "correct": 1,
      "id": 260
    },
    {
      "type": "mcq",
      "question": "Hormone imbalance occurs when a gland produces:",
      "options": [
        "Too much hormone",
        "Too little hormone",
        "Normal amounts",
        "Both A and B"
      ],
      "correct": 3,
      "id": 261
    },
    {
      "type": "mcq",
      "question": "Which treatment is used for musculoskeletal pain?",
      "options": [
        "Pain relievers",
        "Physical therapy",
        "Steroid injections",
        "All of the above"
      ],
      "correct": 3,
      "id": 262
    },
    {
      "type": "mcq",
      "question": "Splints are used for:",
      "options": [
        "Pain relief",
        "Support and immobilization",
        "Medication delivery",
        "Exercise"
      ],
      "correct": 1,
      "id": 263
    },
    {
      "type": "mcq",
      "question": "Which is a common musculoskeletal disorder?",
      "options": [
        "Arthritis",
        "Myalgia",
        "Lumbago",
        "All of the above"
      ],
      "correct": 3,
      "id": 264
    },
    {
      "type": "mcq",
      "question": "Osteomyelitis is:",
      "options": [
        "Joint inflammation",
        "Bone infection",
        "Muscle disease",
        "Nerve disorder"
      ],
      "correct": 1,
      "id": 265
    },
    {
      "type": "mcq",
      "question": "Which vitamin deficiency can cause bleeding disorders?",
      "options": [
        "Vitamin A",
        "Vitamin K",
        "Vitamin C",
        "Vitamin D"
      ],
      "correct": 1,
      "id": 266
    },
    {
      "type": "mcq",
      "question": "Von Willebrand disease is a:",
      "options": [
        "Bleeding disorder",
        "Joint disorder",
        "Muscle disorder",
        "Bone disorder"
      ],
      "correct": 0,
      "id": 267
    },
    {
      "type": "mcq",
      "question": "Haemophilia is a:",
      "options": [
        "Acquired disorder",
        "Congenital disorder",
        "Temporary condition",
        "Infectious disease"
      ],
      "correct": 1,
      "id": 268
    },
    {
      "type": "mcq",
      "question": "Leukocytosis refers to:",
      "options": [
        "Decreased white blood cells",
        "Increased white blood cells",
        "Normal white blood cells",
        "Absent white blood cells"
      ],
      "correct": 1,
      "id": 269
    },
    {
      "type": "mcq",
      "question": "Which drug can cause reduced platelet production?",
      "options": [
        "Aspirin",
        "Chloramphenicol",
        "Penicillin",
        "Insulin"
      ],
      "correct": 1,
      "id": 270
    },
    {
      "type": "mcq",
      "question": "Unexplained weight loss is a symptom of:",
      "options": [
        "Arthritis",
        "Leukemia",
        "Myalgia",
        "Gout"
      ],
      "correct": 1,
      "id": 271
    },
    {
      "type": "mcq",
      "question": "Shortness of breath can be associated with:",
      "options": [
        "Muscle disorders",
        "Blood disorders",
        "Joint problems",
        "All conditions"
      ],
      "correct": 1,
      "id": 272
    },
    {
      "type": "mcq",
      "question": "Repeated infections may indicate:",
      "options": [
        "Arthritis",
        "Blood disorders",
        "Muscle problems",
        "Bone fractures"
      ],
      "correct": 1,
      "id": 273
    },
    {
      "type": "mcq",
      "question": "Bruising or bleeding is commonly seen in:",
      "options": [
        "Arthritis",
        "Myalgia",
        "Blood disorders",
        "Endocrine disorders"
      ],
      "correct": 2,
      "id": 274
    },
    {
      "type": "mcq",
      "question": "Which test is used to diagnose arthritis?",
      "options": [
        "Physical examination",
        "X-rays",
        "Blood test",
        "All of the above"
      ],
      "correct": 3,
      "id": 275
    },
    {
      "type": "mcq",
      "question": "Synovial joint fluid test is used for:",
      "options": [
        "Muscle disorders",
        "Arthritis diagnosis",
        "Blood disorders",
        "Endocrine problems"
      ],
      "correct": 1,
      "id": 276
    },
    {
      "type": "mcq",
      "question": "Urine test can help diagnose:",
      "options": [
        "Arthritis",
        "Gout",
        "Myalgia",
        "All conditions"
      ],
      "correct": 1,
      "id": 277
    },
    {
      "type": "mcq",
      "question": "MRI scans are useful for diagnosing:",
      "options": [
        "Soft tissue problems",
        "Bone problems",
        "Joint problems",
        "All of the above"
      ],
      "correct": 3,
      "id": 278
    },
    {
      "type": "mcq",
      "question": "X-rays are primarily used to view:",
      "options": [
        "Soft tissues",
        "Bones and joints",
        "Muscles",
        "Blood vessels"
      ],
      "correct": 1,
      "id": 279
    },
    {
      "type": "mcq",
      "question": "Which treatment involves injecting medication directly into joints?",
      "options": [
        "Physical therapy",
        "Steroid injections",
        "Surgery",
        "Occupational therapy"
      ],
      "correct": 1,
      "id": 280
    },
    {
      "type": "mcq",
      "question": "Therapeutic massage is used for:",
      "options": [
        "Pain relief",
        "Improved circulation",
        "Muscle relaxation",
        "All of the above"
      ],
      "correct": 3,
      "id": 281
    },
    {
      "type": "mcq",
      "question": "Which gland is located in the pancreas?",
      "options": [
        "Thyroid cells",
        "Islet cells",
        "Adrenal cells",
        "Pituitary cells"
      ],
      "correct": 1,
      "id": 282
    },
    {
      "type": "mcq",
      "question": "The thymus gland is part of which system?",
      "options": [
        "Digestive",
        "Respiratory",
        "Endocrine",
        "Circulatory"
      ],
      "correct": 2,
      "id": 283
    },
    {
      "type": "mcq",
      "question": "Parathyroid glands regulate:",
      "options": [
        "Blood sugar",
        "Calcium levels",
        "Blood pressure",
        "Heart rate"
      ],
      "correct": 1,
      "id": 284
    },
    {
      "type": "mcq",
      "question": "The pineal gland produces:",
      "options": [
        "Insulin",
        "Cortisol",
        "Melatonin",
        "Thyroxine"
      ],
      "correct": 2,
      "id": 285
    },
    {
      "type": "mcq",
      "question": "Lesions in the endocrine system can be:",
      "options": [
        "Nodules",
        "Tumors",
        "Both nodules and tumors",
        "Neither"
      ],
      "correct": 2,
      "id": 286
    },
    {
      "type": "mcq",
      "question": "Endocrine lesions may or may not affect:",
      "options": [
        "Blood pressure",
        "Heart rate",
        "Hormone levels",
        "Body temperature"
      ],
      "correct": 2,
      "id": 287
    },
    {
      "type": "mcq",
      "question": "The hypothalamus is part of the:",
      "options": [
        "Digestive system",
        "Nervous system",
        "Endocrine system",
        "Both B and C"
      ],
      "correct": 3,
      "id": 288
    },
    {
      "type": "mcq",
      "question": "Testes and ovaries are:",
      "options": [
        "Reproductive organs only",
        "Endocrine glands only",
        "Both reproductive organs and endocrine glands",
        "Neither"
      ],
      "correct": 2,
      "id": 289
    },
    {
      "type": "mcq",
      "question": "Which factor increases arthritis risk?",
      "options": [
        "Age",
        "Gender",
        "Obesity",
        "All of the above"
      ],
      "correct": 3,
      "id": 290
    },
    {
      "type": "mcq",
      "question": "Most types of arthritis are more common in:",
      "options": [
        "Men",
        "Women",
        "Children",
        "Elderly men only"
      ],
      "correct": 1,
      "id": 291
    },
    {
      "type": "mcq",
      "question": "Gout is an exception to the gender rule because it's more common in:",
      "options": [
        "Women",
        "Children",
        "Men",
        "Elderly women"
      ],
      "correct": 2,
      "id": 292
    },
    {
      "type": "theory",
      "question": "Explain the pathophysiology of atrial fibrillation and discuss its potential complications. Include the mechanism of chaotic heart signaling and why it may be life-threatening.",
      "id": 293
    },
    {
      "type": "theory",
      "question": "Compare and contrast left-sided and right-sided heart failure. Discuss the signs, symptoms, and underlying pathophysiology of each condition.",
      "id": 294
    },
    {
      "type": "theory",
      "question": "Describe the different types of anemia based on their underlying causes. Explain the mechanisms of production of insufficient erythrocytes versus rapid breakdown or destruction of erythrocytes.",
      "id": 295
    },
    {
      "type": "theory",
      "question": "Explain the role of different types of white blood cells in the immune system. Discuss how leukopenia affects the body's ability to fight infections.",
      "id": 296
    },
    {
      "type": "theory",
      "question": "Describe the causes and consequences of thrombocytopenia. Explain the difference between reduced platelet production and increased platelet destruction.",
      "id": 297
    },
    {
      "type": "theory",
      "question": "Discuss the classification of arrhythmias based on heart rate (tachycardia vs bradycardia). Explain the different types of tachycardias and their clinical significance.",
      "id": 298
    },
    {
      "type": "theory",
      "question": "Explain the concept of musculoskeletal disorders and their impact on quality of life. Discuss why low back pain is considered the main contributor to the overall burden of musculoskeletal disease.",
      "id": 299
    },
    {
      "type": "theory",
      "question": "Describe the pathophysiology of congestive heart failure. Explain how impaired heart pumping leads to congestion in different body systems.",
      "id": 300
    },
    {
      "type": "theory",
      "question": "Discuss the various causes of leukemia and explain why it is considered a malignant proliferation of white blood cell precursors. Include its effects on normal blood cell formation.",
      "id": 301
    },
    {
      "type": "theory",
      "question": "Explain the relationship between electrolyte imbalances (such as sodium and potassium) and cardiac arrhythmias. Discuss how these imbalances affect heart muscle function and electrical conduction.",
      "id": 302
    }
  ],
    {
      "type": "fill in the blank",
      "question": "Arrhythmia is a condition in which the heart beats with an _______ or _______ rhythm.",
      "id": 1
    },
    {
      "type": "fill in the blank",
      "question": "Tachycardia is defined as a heart rate greater than _______ bpm.",
      "id": 2
    },
    {
      "type": "fill in the blank",
      "question": "Bradycardia is defined as a resting heart rate less than _______ bpm.",
      "id": 3
    },
    {
      "type": "fill in the blank",
      "question": "Heart failure is also known as _______ heart failure or _______.",
      "id": 4
    },
    {
      "type": "fill in the blank",
      "question": "_______ nocturnal dyspnoea (PND) is a sign of left-sided cardiac failure.",
      "id": 5
    },
    {
      "type": "fill in the blank",
      "question": "Anemia is the inability of blood to carry enough _______ to meet body needs.",
      "id": 6
    },
    {
      "type": "fill in the blank",
      "question": "_______ anemia occurs when circulating red cells are destroyed or removed prematurely from the blood.",
      "id": 7
    },
    {
      "type": "fill in the blank",
      "question": "Leukopenia is defined as total blood leukocyte count less than _______ × 10⁹/L.",
      "id": 8
    },
    {
      "type": "fill in the blank",
      "question": "_______ destroy bacteria and viruses, while _______ kill viruses and regulate the immune system.",
      "id": 9
    },
    {
      "type": "fill in the blank",
      "question": "Thrombocytopenia is defined as a blood platelet count below _______ × 10⁹/L.",
      "id": 10
    },
    {
      "type": "fill in the blank",
      "question": "The normal platelet count range is _______ × 10⁹/L to _______ × 10⁹/L.",
      "id": 11
    },
    {
      "type": "fill in the blank",
      "question": "Leukemia is a _______ proliferation of white blood cell _______ by the bone marrow.",
      "id": 12
    },
    {
      "type": "fill in the blank",
      "question": "Musculoskeletal disorders affect the muscles, nerves, tendons, joints, _______ and spinal _______.",
      "id": 13
    },
    {
      "type": "fill in the blank",
      "question": "Musculoskeletal conditions comprise more than _______ conditions that affect the locomotor system.",
      "id": 14
    },
    {
      "type": "fill in the blank",
      "question": "_______ back pain is the main contributor to the overall burden of musculoskeletal disease.",
      "id": 15
    },
    {
      "type": "fill in the blank",
      "question": "Atrial fibrillation causes a _______ uncoordinated heart rate and is associated with serious complications such as _______.",
      "id": 16
    },
    {
      "type": "fill in the blank",
      "question": "Ventricular fibrillation occurs when rapid, _______ electrical signals cause the lower chambers to _______ instead of contracting.",
      "id": 17
    },
    {
      "type": "fill in the blank",
      "question": "The _______ node is responsible for setting the pace of the heart.",
      "id": 18
    },
    {
      "type": "fill in the blank",
      "question": "For severe anemia, the PCV is less than _______%, while for mild anemia it is between _______% and _______% .",
      "id": 19
    },
    {
      "type": "fill in the blank",
      "question": "_______ and _______ help the body respond to allergic reactions and help destroy parasites.",
      "id": 20
    },
    {
      "question": "The _______ test can detect both mycobacterium (MTB) and drug-resistant TB in less than _______ hours.",
      "answers": [
        "Gene Xpert",
        "2"
      ],
      "id": 21
    },
    {
      "question": "TB treatment is achieved through _______ which means the patient swallows the right drugs, in the right doses, at the right time under the supervision of a _______.",
      "answers": [
        "DOT",
        "health worker"
      ],
      "id": 22
    },
    {
      "question": "Diphtheria usually affects the mucous membrane of the _______ and throat, manifesting as either a respiratory tract or _______ infection.",
      "answers": [
        "nose",
        "cutaneous"
      ],
      "id": 23
    },
    {
      "question": "The incubation period for diphtheria is _______ to _______ days.",
      "answers": [
        "3",
        "5"
      ],
      "id": 24
    },
    {
      "question": "Pertussis affects all age groups, but the majority of cases arise in _______-_______ individuals.",
      "answers": [
        "non",
        "vaccinated"
      ],
      "id": 25
    },
    {
      "question": "Children under the age of _______ are at highest risk for pertussis complications and _______.",
      "answers": [
        "2",
        "death"
      ],
      "id": 26
    },
    {
      "question": "In a severe asthma attack, the patient cannot complete a _______ in one breath, or has _______ breaths per minute.",
      "answers": [
        "sentence",
        "100"
      ],
      "id": 27
    },
    {
      "question": "GERD occurs when stomach contents leak _______ from the stomach into the _______.",
      "answers": [
        "backward",
        "esophagus"
      ],
      "id": 28
    },
    {
      "question": "Peptic ulcer disease is a sore on the lining of the _______ or the first part of the small intestine called _______.",
      "answers": [
        "stomach",
        "duodenum"
      ],
      "id": 29
    },
    {
      "question": "Amoebic dysentery is caused by a parasitic intestinal protozoa called _______ _______.",
      "answers": [
        "Entamoeba",
        "histolytica"
      ],
      "id": 30
    },
    {
      "question": "Explain the importance of DOT (Directly Observed Treatment) in tuberculosis management and describe the key criteria required for prescribing correct treatment.",
      "id": 31
    },
    {
      "question": "Compare and contrast the clinical presentations of diphtheria and pertussis, including their causative organisms, incubation periods, and characteristic symptoms.",
      "id": 32
    },
    {
      "question": "Describe the pathophysiology of asthma and explain how precipitating factors contribute to asthma attacks. Include the difference between mild-to-moderate and severe asthma attacks.",
      "id": 33
    },
    {
      "question": "Explain the prevention and control measures for tuberculosis as outlined in the NTBLCP guidelines, including vaccination, environmental controls, and case management.",
      "id": 34
    },
    {
      "question": "Discuss the management approach for different severities of asthma attacks, including positioning, medications (salbutamol, prednisolone, hydrocortisone), and when to consider intensive care.",
      "id": 35
    },
    {
      "question": "Differentiate between the various types of abnormal breath sounds (wheezing, rales, rhonchi, stridor) and explain their clinical significance in respiratory conditions.",
      "id": 36
    },
    {
      "question": "Explain the relationship between Helicobacter pylori and peptic ulcer disease, including the treatment approach for H. pylori eradication and management of complicated ulcers.",
      "id": 37
    },
    {
      "question": "Compare amoebic dysentery and bacillary dysentery in terms of causative agents, clinical presentation, complications, and modes of transmission.",
      "id": 38
    },
    {
      "question": "Describe the comprehensive approach to GERD management, including lifestyle modifications and pharmacological interventions with antacids and acid suppressants.",
      "id": 39
    },
    {
      "question": "Explain the public health significance of early identification and prompt treatment of communicable respiratory diseases, including the role of healthcare workers in disease control and prevention.",
      "id": 40
    },
    {
      "id": 41,
      "question": "Symptomatology is the branch of medicine which deals with the study and _______ of the symptoms of diseases.",
      "answer": "classification",
      "type": "fill"
    },
    {
      "id": 42,
      "question": "A _______ is what a patient feels or experiences, while a _______ is what the physician observes.",
      "answer": "symptom, sign",
      "type": "fill"
    },
    {
      "id": 43,
      "question": "Dental caries develops when bacteria in the mouth metabolize _______ in food particles to produce acid.",
      "answer": "sugar",
      "type": "fill"
    },
    {
      "id": 44,
      "question": "The three main factors important in dental caries formation are tooth, bacteria, and _______.",
      "answer": "diet",
      "type": "fill"
    },
    {
      "id": 45,
      "question": "Gingivitis is the inflammation of the _______ and is the number one cause of bleeding gums in adults.",
      "answer": "gums",
      "type": "fill"
    },
    {
      "id": 46,
      "question": "Bronchitis is the inflammation of the _______ mucosa and is most commonly of viral origin.",
      "answer": "bronchial",
      "type": "fill"
    },
    {
      "id": 47,
      "question": "Pneumonia is an infection of the _______ _______ and is the leading cause of death in children under five years.",
      "answer": "pulmonary alveoli",
      "type": "fill"
    },
    {
      "id": 48,
      "question": "Tuberculosis is caused by _______ _______ and has an incubation period of 2-10 weeks.",
      "answer": "mycobacterium tuberculosis",
      "type": "fill"
    },
    {
      "id": 49,
      "question": "The mode of transmission of TB is _______ through inhalation of released TB germs.",
      "answer": "airborne",
      "type": "fill"
    },
    {
      "id": 50,
      "question": "Regular _______ visits, at least twice a year, are recommended for prevention and control of oral diseases.",
      "answer": "dental",
      "type": "fill"
    }
  ],
  "theory": [
    {
      "id": 1,
      "question": "Define symptomatology and explain its importance in medical practice.",
      "type": "theory"
    },
    {
      "id": 2,
      "question": "Differentiate between symptoms and signs, providing three examples of each.",
      "type": "theory"
    },
    {
      "id": 3,
      "question": "Explain the three types of symptoms (remitting, chronic, and relapsing) with examples.",
      "type": "theory"
    },
    {
      "id": 4,
      "question": "Describe the process of dental caries formation, including the three main factors involved.",
      "type": "theory"
    },
    {
      "id": 5,
      "question": "Discuss the causes, signs, and symptoms of gingivitis, and explain why it's significant in oral health.",
      "type": "theory"
    },
    {
      "id": 6,
      "question": "Compare and contrast acute and chronic bronchitis, including their causes and management.",
      "type": "theory"
    },
    {
      "id": 7,
      "question": "Explain the epidemiology of tuberculosis, including its transmission, high-risk populations, and prevention strategies.",
      "type": "theory"
    },
    {
      "id": 8,
      "question": "Describe the signs and symptoms of pneumonia and explain why certain populations are at higher risk.",
      "type": "theory"
    },
    {
      "id": 9,
      "question": "Outline a comprehensive prevention and control program for oral diseases.",
      "type": "theory"
    },
    {
      "id": 10,
      "question": "Discuss the rationale for studying symptomatology in healthcare, including its role in diagnosis, treatment, and patient monitoring.",
      "type": "theory"
    }
  ]
};