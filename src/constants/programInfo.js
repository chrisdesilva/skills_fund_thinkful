import logo from "../images/logo_thinkful.png" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = "69140c47-bb03-4a1b-b674-cc136fdea23d" // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = "October 29, 2019"
export const showPopup = false

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
  // term details section
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APRRange36: "11.01 - 11.69%",
  APRRange60: "XX.XX - XX.XX%",
  interestOnly: [
    {
      // for multiple examples of interest only, add items to interestOnly array
      programName: "",
      APR36: "11.08%",
      financeCharge36: "$2,371.56",
      IOPayment36: "$77.91",
      FullMonthlyPayment36: "$330.67",
      APR60: "XX.XX%",
      financeCharge60: "$X,XXX.XX",
      IOPayment60: "$XX.XX",
      FullMonthlyPayment60: "$XXX.XX",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
      programLength: "X", // program length in months
    },
  ],
  immediateRepayment: [
    {
      // for multiple examples of immmediate repayment, add items to immediateRepayment array
      programName: "",
      APR36: "11.69%",
      financeCharge36: "$1,904.08",
      FullMonthlyPayment36: "$330.67",
      APR60: "XX.XX%",
      financeCharge60: "$X,XXX.XX",
      FullMonthlyPayment60: "$XXX.XX",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
    },
  ],
}

export const faq = {
  // faq section
  costOfLiving: false, // true if at least one program has cost of living included
  costOfLivingPrograms: "", // leave as empty string is cost of living availability is the same across all programs
  multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
  interestOnly: true, // true if interest-only payments are an option
  immediateRepayment: true, // true if immediate repayment is an option
  multipleLoanLengths: false, // true if 36 and 60 month options are both available
  multipleLoanTypes: true, // true if both IR and IO are available
  multiPrograms: true, // only true if there are multiple programs
  onlinePrograms: true, // true if at least one program is remote/online
  schoolHQState: "NY",
  origFee: 0.04,

  // interest payment FAQ info
  exampleLoanAmount: "$10,000",
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APR36: "11.01 - 11.34%",
  APR60: "XX.XX - XX.XX%",
  IOPayment36: "$77.91",
  IOPayment60: "$95.25",

  // max loan amounts by program for faq1
  loanRange: [
    {
      programName: "Data Analytics",
      maxAmount: "$8,970",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Data Analytics Immersion",
      maxAmount: "$13,600",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Data Science Flex",
      maxAmount: "$8,970",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Data Science Immersion",
      maxAmount: "$20,000",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Digital Marketing Immersion",
      maxAmount: "$8,300",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Digital Marketing Flex",
      maxAmount: "$5,500",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Engineering Flex",
      maxAmount: "$10,000",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Engineering Immersion",
      maxAmount: "$17,600",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Engineering Nights & Weekends",
      maxAmount: "$13,825",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "Product Management Flex",
      maxAmount: "$9,600",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "UX/UI Design Flex",
      maxAmount: "$9,540",
      col: false,
      colAmount: "$6,000",
    },
    {
      programName: "UX/UI Design Immersion",
      maxAmount: "$13,500",
      col: false,
      colAmount: "$6,000",
    },
  ],
}

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Thinkful"

export const schoolURL = "https://www.thinkful.com/" // update with url of school's website

export const skfURL = "https://thinkful.skills.fund" // update with Skills Fund url

export const headline = "Fund Your Future At Thinkful" // update headline as appropriate

export const leadContent = {
  header: "Your last step on the path toward changing your career",
  paragraph: `${schoolName} designs its programs to cover multiple stacks of programming languages to help graduates develop a diverse skill-set. ${schoolName} partners with Skills Fund to offer tuition${
    faq.costOfLiving ? " and cost of living" : ""
  } financing so more students like you can access their program.`,
}

export const threeStepCardText = {
  step1: "",
  step2: {
    header: "select your program",
    text:
      "Choose between the Onsite Bootcamp, Online Full-Time Bootcamp, and Online Part-Time Bootcamp programs.",
  },
  step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`,
}

export const netlifyFormName = "thinkful_contact"

export const GATracking = "UA-68312423-1"

export const hubspotFormId = "1c127ac4-ca09-48d7-b8a6-73dcb0ad30ee" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_thinkful_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000
export const placeholder = "$10,000"
export const interestRates = {
  ir36: 8.99,
  ir60: 10.99,
}
export const moreThanSixPrograms = true // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [
  // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
  {
    name: "Data Analytics",
    url: "https://my.skills.fund/application?lenderCode=SKTHDAT19",
    queryParams: "?program=da",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 8970,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 10,
        apr36: 11.16,
      },
      "Immediate Repayment": {
        apr36: 11.69,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 8970,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 10,
            apr36: 11.16,
          },
          "Immediate Repayment": {
            apr36: 11.69,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Data Analytics Immersion",
    url: "https://my.skills.fund/application?lenderCode=SKTHDATIM19", // $13,500 max tuition, no COL alert
    queryParams: "?program=daimm",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 13600,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 6,
        apr36: 11.08,
        apr60: 12.51,
      },
      "Immediate Repayment": {
        apr36: 11.69,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 13600,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 6,
            apr36: 11.08,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 11.69,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  // {
  // 	name: 'Data Analytics Nights & Weekends',
  // 	url: 'https://my.skills.fund/application?lenderCode=SKTHDANW19',
  // 	queryParams: '?program=danw',
  // 	loanInfo: {
  // 		// match loanInfo in first metro below
  // 		maxLoanAmt: 12600,
  // 		loanTerm36: true,
  // 		loanTerm60: false,
  // 		'Interest Only': {
  // 			// interest-only
  // 			k: 9,
  // 			apr36: 10.87,
  // 			apr60: 12.51
  // 		},
  // 		'Immediate Repayment': {
  // 			apr36: 11.69
  // 		}
  // 	},
  // 	defaultLoanType: 'Interest Only', // leave at 0 for interest-only, set to 1 for immediate repayment
  // 	showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
  // 	showLoanTypes: true, // true if both IR and IO are available
  // 	loanTypes: [ 'Interest Only', 'Immediate Repayment' ],
  // 	locations: [ 'Metro 1', 'Metro 2', 'Metro 3' ],
  // 	metros: [
  // 		// list in same order as locations array above
  // 		{
  // 			location: 'Metro 1',
  // 			loanInfo: {
  // 				// // match loanInfo to Program 1 above
  // 				maxLoanAmt: 12600,
  // 				loanTerm36: true,
  // 				loanTerm60: false,
  // 				'Interest Only': {
  // 					k: 9,
  // 					apr36: 10.87,
  // 					apr60: 12.51
  // 				},
  // 				'Immediate Repayment': {
  // 					apr36: 11.69
  // 				}
  // 			}
  // 		},
  // 		{
  // 			location: 'Metro 2',
  // 			loanInfo: {
  // 				maxLoanAmt: 15545,
  // 				loanTerm36: true,
  // 				loanTerm60: true,
  // 				'Interest Only': {
  // 					k: 5,
  // 					apr36: 11.16,
  // 					apr60: 12.51
  // 				},
  // 				'Immediate Repayment': null
  // 			}
  // 		},
  // 		{
  // 			location: 'Metro 3',
  // 			loanInfo: {
  // 				maxLoanAmt: 20545,
  // 				loanTerm36: true,
  // 				loanTerm60: true,
  // 				'Interest Only': {
  // 					k: 5,
  // 					apr36: 11.16,
  // 					apr60: 12.51
  // 				},
  // 				'Immediate Repayment': null
  // 			}
  // 		}
  // 	]
  // },
  {
    name: "Data Science Flex",
    url: "https://my.skills.fund/application?lenderCode=SFTDDS",
    queryParams: "?program=ds",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 8970,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 10,
        apr36: 11.16,
        apr60: 12.51,
      },
      "Immediate Repayment": {
        apr36: 11.69,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 8970,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 10,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 11.69,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 8,
            apr36: 10.94,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Data Science Immersion",
    url: "https://my.skills.fund/application?lenderCode=SKTHKIMM19",
    queryParams: "?program=dsimm",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 20000,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 7,
        apr36: 11.01,
        apr60: 12.51,
      },
      "Immediate Repayment": {
        apr36: 11.69,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 20000,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 7,
            apr36: 11.01,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 11.69,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  // {
  // 	name: 'Data Science Nights & Weekends',
  // 	url: 'https://my.skills.fund/application?lenderCode=SKTHDSNW19',
  // 	queryParams: '?program=dsnw',
  // 	loanInfo: {
  // 		// match loanInfo in first metro below
  // 		maxLoanAmt: 12600,
  // 		loanTerm36: true,
  // 		loanTerm60: false,
  // 		'Interest Only': {
  // 			// interest-only
  // 			k: 9,
  // 			apr36: 10.87,
  // 			apr60: 12.51
  // 		},
  // 		'Immediate Repayment': {
  // 			apr36: 11.69
  // 		}
  // 	},
  // 	defaultLoanType: 'Interest Only', // leave at 0 for interest-only, set to 1 for immediate repayment
  // 	showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
  // 	showLoanTypes: true, // true if both IR and IO are available
  // 	loanTypes: [ 'Interest Only', 'Immediate Repayment' ],
  // 	locations: [ 'Metro 1', 'Metro 2', 'Metro 3' ],
  // 	metros: [
  // 		// list in same order as locations array above
  // 		{
  // 			location: 'Metro 1',
  // 			loanInfo: {
  // 				// // match loanInfo to Program 1 above
  // 				maxLoanAmt: 12600,
  // 				loanTerm36: true,
  // 				loanTerm60: false,
  // 				'Interest Only': {
  // 					k: 9,
  // 					apr36: 10.87,
  // 					apr60: 12.51
  // 				},
  // 				'Immediate Repayment': {
  // 					apr36: 11.69
  // 				}
  // 			}
  // 		},
  // 		{
  // 			location: 'Metro 2',
  // 			loanInfo: {
  // 				maxLoanAmt: 15545,
  // 				loanTerm36: true,
  // 				loanTerm60: true,
  // 				'Interest Only': {
  // 					k: 5,
  // 					apr36: 11.16,
  // 					apr60: 12.51
  // 				},
  // 				'Immediate Repayment': null
  // 			}
  // 		},
  // 		{
  // 			location: 'Metro 3',
  // 			loanInfo: {
  // 				maxLoanAmt: 20545,
  // 				loanTerm36: true,
  // 				loanTerm60: true,
  // 				'Interest Only': {
  // 					k: 5,
  // 					apr36: 11.16,
  // 					apr60: 12.51
  // 				},
  // 				'Immediate Repayment': null
  // 			}
  // 		}
  // 	]
  // },
  {
    name: "Digital Marketing Flex",
    url: "https://my.skills.fund/application?lenderCode=SKTHDMFPT19",
    queryParams: "?program=dm",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 5500,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 5,
        apr36: 11.16,
        apr60: 12.51,
      },
      "Immediate Repayment": {
        apr36: 11.69,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 5500,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 11.69,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Digital Marketing Immersion",
    url: "https://my.skills.fund/application?lenderCode=SKTHDMFFT19",
    queryParams: "?program=dmimm",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 8300,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 3,
        apr36: 11.34,
        apr60: 12.51,
      },
      "Immediate Repayment": {
        apr36: 11.69,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 8300,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 3,
            apr36: 11.34,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 11.69,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Engineering Flex",
    url: "https://my.skills.fund/application?lenderCode=SFTF",
    queryParams: "?program=eng",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 10000,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 10,
        apr36: 11.16,
        apr60: 12.51,
      },
      "Immediate Repayment": {
        apr36: 11.69,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 10000,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 10,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 11.69,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Engineering Immersion",
    url: "https://my.skills.fund/application?lenderCode=SFTFIO",
    queryParams: "?program=engimm",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 17600,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 6,
        apr36: 11.08,
        apr60: 12.51,
      },
      "Immediate Repayment": {
        apr36: 11.69,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 17600,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 6,
            apr36: 11.08,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 11.69,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Engineering Nights & Weekends",
    url: "https://my.skills.fund/application?lenderCode=SKTHKENW18",
    queryParams: "?program=engnw",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 13825,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 9,
        apr36: 10.87,
        apr60: 12.51,
      },
      "Immediate Repayment": {
        apr36: 11.69,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 13825,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 9,
            apr36: 10.87,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 11.69,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Product Management Flex",
    url: "https://my.skills.fund/application?lenderCode=SKTHPMF19",
    queryParams: "?program=pm",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 9600,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 7,
        apr36: 11.16,
        apr60: 12.51,
      },
      "Immediate Repayment": {
        apr36: 11.69,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 9600,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 7,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 11.69,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "UX/UI Design Flex",
    url: "https://my.skills.fund/application?lenderCode=SKTHFPD19",
    queryParams: "?program=uxui",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 9540,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 10,
        apr36: 11.08,
        apr60: 12.51,
      },
      "Immediate Repayment": {
        apr36: 11.69,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 9540,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 10,
            apr36: 11.08,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 11.69,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "UX/UI Design Immersion",
    url: "https://my.skills.fund/application?lenderCode=SKTHUXD19",
    queryParams: "?program=uxuiimm",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 13500,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 7,
        apr36: 11.08,
        apr60: 12.51,
      },
      "Immediate Repayment": {
        apr36: 11.69,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 13500,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 7,
            apr36: 11.08,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 11.69,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Technical Project Management Immersion",
    url: "https://my.skills.fund/application?lenderCode=SKTHTPMI19",
    queryParams: "?program=tpmimm",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 10000,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 5,
        apr36: 11.16,
        apr60: 12.51,
      },
      "Immediate Repayment": {
        apr36: 11.69,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 10000,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 11.69,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Technical Project Management Flex",
    url: "https://my.skills.fund/application?lenderCode=SKTHTPMF19",
    queryParams: "?program=tpm",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 7500,
      loanTerm36: true,
      loanTerm60: false,
      "Interest Only": {
        // interest-only
        k: 6,
        apr36: 11.08,
        apr60: 12.51,
      },
      "Immediate Repayment": {
        apr36: 11.69,
      },
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: true, // true if both IR and IO are available
    loanTypes: ["Interest Only", "Immediate Repayment"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 7500,
          loanTerm36: true,
          loanTerm60: false,
          "Interest Only": {
            k: 6,
            apr36: 11.08,
            apr60: 12.51,
          },
          "Immediate Repayment": {
            apr36: 11.69,
          },
        },
      },
      {
        location: "Metro 2",
        loanInfo: {
          maxLoanAmt: 15545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
      {
        location: "Metro 3",
        loanInfo: {
          maxLoanAmt: 20545,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.16,
            apr60: 12.51,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
  "Choose the loan amount that works best for you. Borrow up to your metro's max (see table below) for the PROGRAM 1, up to $14,995 for the PROGRAM 2 Bootcamp tuition, and up to $9,995 for the PROGRAM 3 Bootcamp tuition."

export const paymentTable = {
  headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
  data: [
    {
      name: "PROGRAM 1",
      tuition: "$13,495",
      col: "$6,000",
      max: "$19,495",
    },
    {
      name: "PROGRAM 2",
      tuition: "$16,495",
      col: "$6,000",
      max: "$22,495",
    },
    {
      name: "PROGRAM 3",
      tuition: "$13,495",
      col: "--",
      max: "$13,495",
    },
  ],
  show: false,
}

// ***** END LOAN CALC TEXT INFO *****

// ***** Snippets for Netlify *****

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>
