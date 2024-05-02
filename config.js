/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    templates: {
      posthtml: {
        expressions: {
          delimiters: ["{{", "}}"],
        },
      },
      source: "src/templates",
      destination: {
        path: "build_local",
      },
      assets: {
        source: "src/images",
        destination: "images",
      },
    },
  },
  locals: {
    customer: {
      firstName: "Aymeric",
      email: "aymeric@kohort.eu",
      email: "helo",
    },
    userName: "adminName",
    initialAmount: "120,00€",
    creatorDiscountAmount: "-30€",
    remainingTime: "2h 30m",
    staticData_Notification_50: {
      weblink: {
        label: "Des difficultés pour consulter cet email ?",
        seOnline: "Visualiser en ligne",
      },
      howTo: {
        header: "Voilà comment débloquer",
        headerBold: " un maximum de réductions ",
        accessGroup: "sur ta commande",
      },
      infoCards: {
        accessGroup: {
          title: "Suis l’activité du groupe sur l’interface dédiée",
          description:
            "Consulte le délai restant, le nombre de participants et surtout les paliers de réductions débloqués.",
        },
        shareCode: {
          title: "Partage le code à tes amis",
          description:
            "Avec ce code, tes amis passent commande et débloquent des réductions grâce à KohortPay.",
        },
        enjoyDiscounts: {
          title: "Profite de réductions sur ta commande",
          description:
            "À l’issue du délai imparti, tu seras débité du montant final avec la réduction directement appliquée.",
        },
      },
      sharingSection: {
        title: "Invite tes amis à rejoindre ton groupe !",
        message:
          "Partage ce code à tes amis afin de leur permettre de rejoindre le groupe et de débloquer des réductions chez",
        messageEnd: "🥳",
      },
      header: {
        priceDropAlert: "Tic tac, tic tac... ",
        moreMembersLessPay: "Derniers instants pour économiser ⏱",
        welcomeMessageStart:
          "Personne n’a encore rejoint ton achat KohortPay chez ",
        welcomeMessageEnd: "",
        organizationNameBold: ". Mais pas d’inquiétude, on est là pour toi !",
      },
      mainContent: {
        greeting: "Bonjour",
        remainingTimeToInvite: "Il te reste",
        invitePartOne: "pour parrainer au moins un ami chez",
        unlockLevel:
          "et débloquer le premier palier de réduction sur vos commandes respectives !",
        offerPartOne: "Donne",
        offerPartTwo: "et bénéficie de",
        offerPartThree:
          "sur ta commande en partageant ton code de parrainage KohortPay. C’est simple, rapide et efficace...",
        friendsAppreciation: "tes amis te remercieront",
        closingWords: "😘",
      },
      callToAction: {
        accessGroupTracking: "🔥 Partager mon code maintenant 🔥",
      },
      promoSection: {
        enjoyDiscounts:
          "Profite bientôt de réductions sur les nombreuses autres marques qui utilisent KohortPay",
      },
      footer: {
        addressLine1: "1 rue Stockholm",
        addressLine2: "75008 Paris",
        addressLine3: "France",
        privacyPolicy: "Confidentialité",
        termsAndConditions: "Conditions générales",
        helpCenter: "Centre d'aide",
        privacyPolicyUrl:
          "https://en.kohortpay.com/legal/politique-de-confidentialite",
        termsAndConditionsUrl:
          "https://en.kohortpay.com/legal/mentions-legales",
        helpCenterUrl: "https://support.kohortpay.com/",
        websiteUrl: "https://www.kohortpay.com/",
      },

      // ... add footer and other sections as needed
    },

    staticData_Creator_Notification: {
      weblink: {
        label: "Des difficultés pour consulter cet email ?",
        seOnline: "Visualiser en ligne",
      },
      howTo: {
        header: "Voilà comment débloquer",
        headerBold: " un maximum de réductions ",
        accessGroup: "sur ta commande",
      },
      infoCards: {
        accessGroup: {
          title: "Suis l’activité du groupe sur l’interface dédiée",
          description:
            "Consulte le délai restant, le nombre de participants et surtout les paliers de réductions débloqués.",
        },
        shareCode: {
          title: "Partage le code à tes amis",
          description:
            "Avec ce code, tes amis passent commande et débloquent des réductions grâce à KohortPay.",
        },
        enjoyDiscounts: {
          title: "Profite de réductions sur ta commande",
          description:
            "À l’issue du délai imparti, tu seras débité du montant final avec la réduction directement appliquée.",
        },
      },
      sharingSection: {
        title: "Invite tes amis à rejoindre ton groupe !",
        message:
          "Partage ce code à tes amis afin de leur permettre de rejoindre le groupe et de débloquer des réductions.",
        messageEnd: "🥳",
      },
      header: {
        priceDropAlert: "Jouer collectif ça marche ! ",
        moreMembersLessPay: "Un nouveau palier vient d’être débloqué 🎯",
        welcomeMessageStart:
          "Félicitations, vous venez de débloquer un nouveau palier de réduction sur vos commandes chez ",
        welcomeMessageEnd: " ",
        organizationNameBold: " !",
      },
      mainContent: {
        greetingCreator: "Bonjour ",
        excitingTimesStart: "Super nouvelle, la participation de ",
        excitingTimesEnd:
          " vient de débloquer un nouveau palier de réduction chez",
        organizationNameBold: " !",
        groupBenefitStart:
          "Cela signifie que désormais, vous bénéficiez tous de ",
        groupBenefitEnd: " sur vos commandes respectives! 🤩",
        newMemberCount: "Nouveau Total de Membres :",
        newReducedPrice: "Nouveau Prix Réduit :",
        encourageMoreFriends:
          "Encouragez plus d'amis à rejoindre et débloquons encore plus de réductions ! Plus on est de fous, moins c’est cher ! 🎉",
      },
      callToAction: {
        accessGroupTracking: "🔥 Partager mon code maintenant 🔥",
      },
      promoSection: {
        enjoyDiscounts:
          "Profite bientôt de réductions sur les nombreuses autres marques qui utilisent KohortPay",
      },
      footer: {
        addressLine1: "1 rue Stockholm",
        addressLine2: "75008 Paris",
        addressLine3: "France",
        privacyPolicy: "Confidentialité",
        termsAndConditions: "Conditions générales",
        helpCenter: "Centre d'aide",
        privacyPolicyUrl:
          "https://en.kohortpay.com/legal/politique-de-confidentialite",
        termsAndConditionsUrl:
          "https://en.kohortpay.com/legal/mentions-legales",
        helpCenterUrl: "https://support.kohortpay.com/",
        websiteUrl: "https://www.kohortpay.com/",
      },

      // ... add footer and other sections as needed
    },
    staticData_Discount_Success: {
      weblink: {
        label: "Des difficultés pour consulter cet email ?",
        seOnline: "Visualiser en ligne",
      },
      header: {
        paymentAuthorized: "Paiement autorisé",
        thankYouForChoosing: "Merci d’avoir choisi KohortPay 😎",
        paymentHasBeenAuthorized: "Ton paiement chez ",
        organizationNameBoldEnd:
          " a bien été autorisé et ta commande est en cours de traitement.",
      },
      mainContent: {
        greetingCustomer: "Bonjour ",
        youChoseKohortPay:
          "Tu as choisi KohortPay comme moyen de paiement chez ",
        groupPaymentFinalized:
          "À l’issue du délai de parrainage, nous prélèverons sur ta carte le montant final de ta commande avec les réductions directement appliquées 🥳.",
        goodNews: "La bonne nouvelle, c’est qu’en rejoignant le groupe de",
        youHaveAlreadySaved: ", tu as déjà la garantie d’économiser ",
        onTheTotalOrderAmount: " sur le montant final de ta commande !",
        paymentDetailsHeader: "Détails du paiement pré-autorisé",
        paymentAmountLabel: "Montant du paiement",
        paymentNumberLabel: "Numéro du paiement",
        paymentDateLabel: "Date du paiement",
        minimumGuaranteeLabel: "Économie Minimum Garantie",
      },
      paymentSummary: {
        header: "Récapitulatif du la commande",
        amountLabel: "Montant total de la commande: ",
        deliveryLabel: "Livraison",
        promoCodeLabel: "Code Promo",
        loyaltyDiscountLabel: "Remise fidélité",
        giftCardDiscountLabel: "Remise carte cadeau",
        exclusiveDiscountLabel: "Remise exclusive KohortPay déjà débloquée",
        totalAmountLabel: "Montant total de la commande",
      },
      disclaimerSection: {
        prefix:
          "*Le montant final débité sera obligatoirement inférieur à celui pré-autorisé car tu as déjà la garantie d’économiser",
        suffix: " sur ta commande",
      },
      footer: {
        addressLine1: "1 rue Stockholm",
        addressLine2: "75008 Paris",
        addressLine3: "France",
        privacyPolicy: "Confidentialité",
        termsAndConditions: "Conditions générales",
        helpCenter: "Centre d'aide",
        privacyPolicyUrl:
          "https://en.kohortpay.com/legal/politique-de-confidentialite",
        termsAndConditionsUrl:
          "https://en.kohortpay.com/legal/mentions-legales",
        helpCenterUrl: "https://support.kohortpay.com/",
        websiteUrl: "https://www.kohortpay.com/",
      },

      // ... add footer and other sections as needed
    },
    staticData7: {
      weblink: {
        label: "Des difficultés pour consulter cet email ?",
        seeOnline: "Visualiser en ligne",
      },
      header: {
        pretitle: "À toi de jouer maintenant !",
        title: "Tu as rejoint un groupe KohortPay 👏🏻",
        description:
          "Partage ton code de parrainage à un maximum d'amis pour débloquer jusqu'à",
        descriptionBold: " sur ta commande !",
      },
      sharingSection: {
        title: "Invite tes amis à rejoindre ton groupe !",
        codeInstruction:
          "Partage ce code à tes amis afin de leur permettre de rejoindre le groupe et de débloquer des réductions chez",
        codeInstructionEnd: "🥳",
      },
      howTo: {
        header: "Voilà comment débloquer",
        headerBold: " un maximum de réductions ",
        accessGroup: "sur ta commande",
        accessGroupDescription:
          "Tu verras le temps restant de ton groupe, les participants et surtout les réductions!",
        shareCode: "Partage le code",
        shareCodeDescription:
          "Avec ce code, tes amis pourront rejoindre le groupe et profiter des réductions.",
        enjoyDiscounts: "Profite des réductions",
        enjoyDiscountsDescription:
          "À la fin du temps, tu seras débité du montant final avec la réduction appliquée directement.",
      },
      infoCards: {
        accessGroup: {
          title: "Suis l’activité du groupe sur l’interface dédiée",
          description:
            "Consulte le délai restant, le nombre de participants et surtout les paliers de réductions débloqués.",
        },
        shareCode: {
          title: "Partage le code à tes amis",
          description:
            "Avec ce code, tes amis passent commande et débloquent des réductions grâce à KohortPay.",
        },
        enjoyDiscounts: {
          title: "Profite de réductions sur ta commande",
          description:
            "À l’issue du délai imparti, tu seras débité du montant final avec la réduction directement appliquée.",
        },
      },
      callToAction: {
        accessGroupTracking: "🔥 Partager mon code maintenant 🔥",
      },
      footer: {
        addressLine1: "1 rue Stockholm",
        addressLine2: "75008 Paris",
        addressLine3: "France",
        privacyPolicy: "Confidentialité",
        termsAndConditions: "Conditions générales",
        helpCenter: "Centre d'aide",
        privacyPolicyUrl:
          "https://en.kohortpay.com/legal/politique-de-confidentialite",
        termsAndConditionsUrl:
          "https://en.kohortpay.com/legal/mentions-legales",
        helpCenterUrl: "https://support.kohortpay.com/",
        websiteUrl: "https://www.kohortpay.com/",
      },
    },
    staticData_DDD: {
      subject: "confirmation de remboursement",
      title: "confirmation de remboursement",
      metaData: "confirmation de votre remboursement",
      weblink: {
        label: "Des difficultés pour consulter cet email ?",
        seeOnline: "Visualiser en ligne",
      },
      header: {
        pretitle: "Remboursement confirmé",
        title: "Ta confirmation de remboursement",
        description:
          "Vous venez de confirmer le remboursement de la commande de",
        descriptionBold: ".",
      },
      mainContent: {
        greetingCustomer: "Bonjour ",
        firstParagraph:
          "Vous avez confirmé le remboursement de la commande de  ",
        amount: " d’un montant de ",
        initialAmount: "(Montant initial de la commande: ",
        initialAmountEnd: ").",
        yourWillReceive:
          "Ce montant a été crédité sur la carte qui a effectué le paiement. Votre client devrait recevoir ce montant sur son compte sous quelques jours.",
      },
      reimbursementDetails: {
        header: "Détails du remboursement",
        amountLabel: "Montant du remboursement",
        dateLabel: "Date du remboursement",
      },
      footer: {
        addressLine1: "1 rue Stockholm",
        addressLine2: "75008 Paris",
        addressLine3: "France",
        privacyPolicy: "Confidentialité",
        termsAndConditions: "Conditions générales",
        helpCenter: "Centre d'aide",
        privacyPolicyUrl:
          "https://en.kohortpay.com/legal/politique-de-confidentialite",
        termsAndConditionsUrl:
          "https://en.kohortpay.com/legal/mentions-legales",
        helpCenterUrl: "https://support.kohortpay.com/",
        websiteUrl: "https://www.kohortpay.com/",
      },
    },
    staticData_Refund_customer: {
      subject: "confirmation de remboursement",
      title: "confirmation de remboursement",
      metaData: "confirmation de votre remboursement",
      weblink: {
        label: "Des difficultés pour consulter cet email ?",
        seeOnline: "Visualiser en ligne",
      },
      header: {
        pretitle: "Remboursement confirmé",
        title: "Ta confirmation de remboursement",
        description: "Ton paiement chez ",
        descriptionBold:
          "vient d'être remboursé, tu devrais bientôt recevoir le montant sur ton compte!",
      },
      mainContent: {
        greetingCustomer: "Bonjour ",
        firstParagraph: "Tu as demandé le remboursement de ta commande chez  ",
        goodNews: "Nous venons d'envoyer un remboursement d'un montant de ",
        yourWillReceive:
          " sur la carte qui a effectué le paiement. Vous devriez recevoir ce montant sur votre compte sous quelques jours.",
      },
      reimbursementDetails: {
        header: "Détails du remboursement",
        amountLabel: "Montant du remboursement",
        dateLabel: "Date du remboursement",
      },
      footer: {
        addressLine1: "1 rue Stockholm",
        addressLine2: "75008 Paris",
        addressLine3: "France",
        privacyPolicy: "Confidentialité",
        termsAndConditions: "Conditions générales",
        helpCenter: "Centre d'aide",
        privacyPolicyUrl:
          "https://en.kohortpay.com/legal/politique-de-confidentialite",
        termsAndConditionsUrl:
          "https://en.kohortpay.com/legal/mentions-legales",
        helpCenterUrl: "https://support.kohortpay.com/",
        websiteUrl: "https://www.kohortpay.com/",
      },
    },
    staticData_Group_Joined: {
      weblink: {
        label: "Des difficultés pour consulter cet email ?",
        seeOnline: "Visualiser en ligne",
      },
      header: {
        pretitle: "À toi de jouer maintenant !",
        title: "Tu as rejoint un groupe KohortPay 👏🏻",
        description:
          "Partage ton code de parrainage à un maximum d'amis pour débloquer jusqu'à",
        descriptionBold: " sur ta commande !",
      },
      sharingSection: {
        title: "Invite tes amis à rejoindre ton groupe !",
        codeInstruction:
          "Partage ce code à tes amis afin de leur permettre de rejoindre le groupe et de débloquer des réductions chez",
        codeInstructionEnd: "🥳",
      },
      howTo: {
        header: "Voilà comment débloquer",
        headerBold: " un maximum de réductions ",
        accessGroup: "sur ta commande",
        accessGroupDescription:
          "Tu verras le temps restant de ton groupe, les participants et surtout les réductions!",
        shareCode: "Partage le code",
        shareCodeDescription:
          "Avec ce code, tes amis pourront rejoindre le groupe et profiter des réductions.",
        enjoyDiscounts: "Profite des réductions",
        enjoyDiscountsDescription:
          "À la fin du temps, tu seras débité du montant final avec la réduction appliquée directement.",
      },
      infoCards: {
        accessGroup: {
          title: "Suis l’activité du groupe sur l’interface dédiée",
          description:
            "Consulte le délai restant, le nombre de participants et surtout les paliers de réductions débloqués.",
        },
        shareCode: {
          title: "Partage le code à tes amis",
          description:
            "Avec ce code, tes amis passent commande et débloquent des réductions grâce à KohortPay.",
        },
        enjoyDiscounts: {
          title: "Profite de réductions sur ta commande",
          description:
            "À l’issue du délai imparti, tu seras débité du montant final avec la réduction directement appliquée.",
        },
      },
      callToAction: {
        accessGroupTracking: "🔥 Partager mon code maintenant 🔥",
      },
      footer: {
        addressLine1: "1 rue Stockholm",
        addressLine2: "75008 Paris",
        addressLine3: "France",
        privacyPolicy: "Confidentialité",
        termsAndConditions: "Conditions générales",
        helpCenter: "Centre d'aide",
        privacyPolicyUrl:
          "https://en.kohortpay.com/legal/politique-de-confidentialite",
        termsAndConditionsUrl:
          "https://en.kohortpay.com/legal/mentions-legales",
        helpCenterUrl: "https://support.kohortpay.com/",
        websiteUrl: "https://www.kohortpay.com/",
      },
    },
    staticData_Capture_Success: {
      weblink: {
        label: "Des difficultés pour consulter cet email ?",
        seOnline: "Visualiser en ligne",
      },
      header: {
        paymentCollected: "Paiement encaissé",
        thankYouForYourPurchase: "Merci d’avoir choisi KohortPay 😎",
        paymentHasBeenCharged: "Ton paiement chez ",
        paymentHasBeenChargedEnd:
          " vient d’être prélevé sur ta carte et nous y avons déjà appliqué les réductions !",
      },
      mainContent: {
        greetingCustomer: "Bonjour ",
        chosenPaymentMethod:
          "Tu avais choisi KohortPay comme moyen de paiement chez ",
        chosenPaymentMethodEnd:
          ". Le délai de parrainage est terminé et nous venons de prélever sur ta carte bancaire le montant final de ta commande avec les réductions directement appliquées 🥳",
        finalAmountCharged: " ",
        collectiveEffort:
          "Grâce à votre effort collectif, tout le monde a bénéficié de",
        everyoneBenefit: "sur sa propre commande. Jouer collectif, ça marche !",
        totalAmount: "Montant Total",
      },
      withdrawalDetails: {
        header: "Détails du prélèvement final",
        dateLabel: "Date du prélèvement",
        finalAmountLabel: "Montant final du prélèvement",
        savingsLabel: "Montant économisé grace à KohortPay",
      },
      initialPaymentDetails: {
        header: "Détails du paiement initial",
        amountLabel: "Montant du paiement",
        numberLabel: "Numéro du paiement",
        dateLabel: "Date du paiement",
      },
      paymentSummary: {
        header: "Récapitulatif de la commande",
        amountLabel: "Montant total de la commande :",
        exclusiveDiscountLabel: "Remise exclusive KohortPay déjà débloquée",
      },
      trackingSection: {
        detailPrompt: "Retrouve le détail de ton groupe ici :",
      },
      callToAction: {
        accessGroupTracking: "🔥Accéder à mon interface de suivi🔥",
      },
      footer: {
        addressLine1: "1 rue Stockholm",
        addressLine2: "75008 Paris",
        addressLine3: "France",
        privacyPolicy: "Confidentialité",
        termsAndConditions: "Conditions générales",
        helpCenter: "Centre d'aide",
        privacyPolicyUrl:
          "https://en.kohortpay.com/legal/politique-de-confidentialite",
        termsAndConditionsUrl:
          "https://en.kohortpay.com/legal/mentions-legales",
        helpCenterUrl: "https://support.kohortpay.com/",
        websiteUrl: "https://www.kohortpay.com/",
      },
    },
    staticData: {
      weblink: {
        label: "Des difficultés pour consulter cet email ?",
        seOnline: "Visualiser en ligne",
      },
      header: {
        invoiceIssued: "Facture émise",
        yourInvoiceIsAvailable: "Votre facture KohortPay est disponible",
        findYourInvoicePrefix: "Retrouvez votre",
        findYourInvoiceSuffix:
          "en pièce jointe ou en vous connectant à votre espace client KohortPay.",
      },
      greeting: {
        helloPrefix: "Bonjour",
        helloSuffix: ",",
      },
      mainContent: {
        weIssuedPaymentPrefix:
          "Nous venons d'émettre un paiement à destination de votre compte bancaire d'un montant de",
        weIssuedPaymentSuffix: "Vous recevrez l'argent sous quelques jours.",
        findAttachedInvoice: "Retrouvez en pièce jointe la facture n° ",
        findAttachedInvoiceSuffix:
          " associée à cette transaction. Vous pouvez également retrouver l'ensemble de vos factures en vous connectant à votre espace client en cliquant sur “Voir mes factures”.",
        importantNoteBold: "Important :",
        importantNote:
          " Les frais de transaction et d'acquisition KohortPay ont été déduits du montant de votre virement. Vous n'avez rien à payer en plus.",
        thisOne: "Cette",
        alreadyPaid: " facture est déjà payée.",
      },
      ctaButton: {
        viewMyInvoices: "Voir mes factures",
      },
      invoiceDetails: {
        header: "Détails de la facture",
        totalAmountLabel: "Montant de la facture (TTC)",
        dateLabel: "Date de la facture",
      },
      footer: {
        addressLine1: "1 rue Stockholm",
        addressLine2: "75008 Paris",
        addressLine3: "France",
        privacyPolicy: "Confidentialité",
        termsAndConditions: "Conditions générales",
        helpCenter: "Centre d'aide",
        privacyPolicyUrl:
          "https://en.kohortpay.com/legal/politique-de-confidentialite",
        termsAndConditionsUrl:
          "https://en.kohortpay.com/legal/mentions-legales",
        helpCenterUrl: "https://support.kohortpay.com/",
        websiteUrl: "https://www.kohortpay.com/",
      },
    },
    staticData_group_complete: {
      weblink: {
        label: "Des difficultés pour consulter cet email ?",
        seOnline: "Visualiser en ligne",
      },
      header: {
        whewItsHot: "Pfoua ! Il fait chaud !",
        basketPriceMelted: "Le prix de ton panier a vraiment fondu 🔥",
        congratsKohortSuccess:
          "Bravo ! Votre Kohort est un franc succès, vous avez  ",
        collectivePlayWorks: "Jouer collectif, ça marche !",
        togetherSucceeded: "tous ensemble réussi à débloquer ",
      },
      subheader: {
        subtitle: "ET TOUTE LE MONDE EN PROFITE!",
        word: "débloqué",
        starting: "Ensemble vous avez ",
        title: "sur chacun de vos commandes, c’est ça l’effet KohortPay!",
      },
      groupDetails: {
        header: "Détails du groupe",
        participantNumberLabel: "Nombre de participants",
        levelReachedLabel: "Palier de réduction atteint",
        totalDiscountLabel: "Économie réalisée sur ta commande",
      },
      promoSection: {
        enjoyDiscounts:
          "Profite bientôt de réductions sur les nombreuses autres marques qui utilisent KohortPay",
      },
      actionButton: {
        accessGroupTracking: "🔥Accéder à mon interface de suivi🔥",
      },
      footer: {
        addressLine1: "1 rue Stockholm",
        addressLine2: "75008 Paris",
        addressLine3: "France",
        privacyPolicy: "Confidentialité",
        termsAndConditions: "Conditions générales",
        helpCenter: "Centre d'aide",
        privacyPolicyUrl:
          "https://en.kohortpay.com/legal/politique-de-confidentialite",
        termsAndConditionsUrl:
          "https://en.kohortpay.com/legal/mentions-legales",
        helpCenterUrl: "https://support.kohortpay.com/",
        websiteUrl: "https://www.kohortpay.com/",
      },
    },
    staticData6: {
      weblink: {
        label: "Des difficultés pour consulter cet email ?",
        seOnline: "Visualiser en ligne",
      },
      header: {
        groupCompleted: "Groupe Complété",
        kohortCompleted: "Votre Kohort est Terminé ! 🎉",
        discoverDetails:
          "Découvrez ci-dessous les détails de chaque participant et le récapitulatif final de l'achat groupé !",
      },
      summarySection: {
        everyoneBenefits: "ET TOUT LE MONDE EN PROFITE !",
        togetherYouSaved: "Ensemble vous avez ",
        totalSaved: " économisé ",
        thatsTheKohortEffect: " au total, c’est ça l’effet Kohort",
      },
      participantDetails: {
        participantRowDescription:
          "Ci-dessous, les détails de chaque participant :",
        // Note: Individual participant details will still be dynamic and not part of the staticData object
      },
      callToAction: {
        accessGroupTracking: "Accéder à l'interface de suivi du groupe",
      },
      totalSaved: {
        label: "Total économisé: ",
      },
      promoSection: {
        enjoyDiscounts:
          "Profite bientôt de réductions sur les nombreuses autres marques qui utilisent KohortPay",
        // Assuming the imageSrc remains dynamic and not translated
      },
      footer: {
        addressLine1: "1 rue Stockholm",
        addressLine2: "75008 Paris",
        addressLine3: "France",
        privacyPolicy: "Confidentialité",
        termsAndConditions: "Conditions générales",
        helpCenter: "Centre d'aide",
        privacyPolicyUrl:
          "https://en.kohortpay.com/legal/politique-de-confidentialite",
        termsAndConditionsUrl:
          "https://en.kohortpay.com/legal/mentions-legales",
        helpCenterUrl: "https://support.kohortpay.com/",
        websiteUrl: "https://www.kohortpay.com/",
      },
    },
    creator: "Martin",
    currentDiscount: "20%",
    currentDiscountAmount: "30€",
    organization: {
      name: "organization translation",
      imageUrl:
        "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yUWVla2dZbEptTmJRR3hJN3lFZ2VqTElXc1IiLCJyaWQiOiJvcmdfMlJiQVBTQ0dqTFZsOXZoTjBUWnpTaXR0Y29sIiwiaW5pdGlhbHMiOiJPIn0",
    },
    customer: {
      firstName: "Aymeric translation",
      email: "aymer@kohort.eu",
    },
    paymentIntent: {
      id: "pi_c543f8546f3c66",
      amount: "100,00€",
      amountCaptured: "90,00€",
      updatedAt: "09-09-2023",
      createdAt: "02-09-2023",
    },
    newMemberName: "Walid",
    creatorName: "Martin",
    totalMembers: 5,
    totalDiscount: "25.00",
    participants: [
      {
        initials: "AB",
        name: "John Doe",
        date: "12/09/2023 - 15:02",
        imgSrc:
          "https://my.kohortpay.dev/_next/image?url=https%3A%2F%2Fshop.kohortpay.com%2Fcdn%2Fshop%2Ffiles%2FCasquette_KONGO.png%3Fv%3D1692971762%26width%3D300&w=64&q=75",
        itemCount: "+3",
        originalPrice: "20€",
        discountedPrice: "15€",
      },
    ],
    paymentGroup: {
      shareUrl: "https://my.kohortpay.com/pg/KHTPAY-92D9AD89",
      shareId: "KHTPAY-92D9AD89",
    },
    discountType: "euros",
    amount: "100,00€",
    participantsLength: 5,
    discount: "20%",
    discountAmount: "10,00€",
    totalSaved: "30,00€",
    maxSaved: 30,
    totalMembers: 5,
    newMemberName: "Walid",
    creatorName: "Martin",
    totalMembers: 5,
    totalDiscount: "25.00",
    createdAt: "12/09/2023 - 15:02",
    payout: {
      amount: "100,00€",
      createdAt: "12/09/2023",
      number: "FR00089-3525252",
    },
    receipent: {
      firstName: "Aymeric",
      lastName: "Aubert",
    },
  },
};
