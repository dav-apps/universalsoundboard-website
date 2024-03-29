//#region en
const enDefaults = {
	lang: "en",
	upgradePage: {
		header: "Thank you for upgrading!",
		errorHeader: "An error occured",
		errorMessage:
			"There was an error while processing your payment. Please try it again.",
		closeTabMessage: "You can close this tab."
	},
	soundPromotionPage: {
		header: "Thank you!",
		description:
			'Your sound will be listed under "Sounds of the day" starting tomorrow.',
		errorHeader: "An error occured",
		errorMessage:
			"There was an error while processing your payment. Please try it again.",
		closeTabMessage: "You can close this tab."
	},
	soundPage: {
		header: "Opening UniversalSoundboard...",
		subhead: "You haven't installed UniversalSoundboard yet?"
	}
}

export var enUS = {
	...enDefaults,
	lang: "en-US"
}

export var enGB = {
	...enDefaults,
	lang: "en-GB"
}
//#endregion

//#region de
const deDefaults = {
	lang: "de",
	upgradePage: {
		header: "Vielen Dank!",
		errorHeader: "Ein Fehler ist aufgetreten",
		errorMessage:
			"Es gab einen Fehler beim Bearbeiten deiner Zahlung. Bitte versuche es nochmal.",
		closeTabMessage: "Du kannst diesen Tab schließen."
	},
	soundPromotionPage: {
		header: "Vielen Dank!",
		description:
			'Dein Sound wird ab morgen unter "Sounds des Tages" gelistet.',
		errorHeader: "Ein Fehler ist aufgetreten",
		errorMessage:
			"Es gab einen Fehler beim Bearbeiten deiner Zahlung. Bitte versuche es nochmal.",
		closeTabMessage: "Du kannst diesen Tab schließen."
	},
	soundPage: {
		header: "UniversalSoundboard wird geöffnet...",
		subhead: "Du hast UniversalSoundboard noch nicht installiert?"
	}
}

export var deDE = {
	...deDefaults,
	lang: "de-DE"
}

export var deAT = {
	...deDefaults,
	lang: "de-AT"
}

export var deCH = {
	...deDefaults,
	lang: "de-CH"
}
//#endregion

//#region fr
const frDefaults = {
	lang: "fr",
	upgradePage: {
		header: "Merci pour la mise à niveau!",
		errorHeader: "Une erreur est survenue",
		errorMessage:
			"Une erreur est survenue lors du traitement de votre paiement. Merci de réessayer.",
		closeTabMessage: "Vous pouvez fermer cet onglet."
	},
	soundPromotionPage: {
		header: "Merci!",
		description: 'Votre son sera listé dès demain sous "Sons du jour".',
		errorHeader: "Une erreur est survenue",
		errorMessage:
			"Une erreur est survenue lors du traitement de votre paiement. Merci de réessayer.",
		closeTabMessage: "Vous pouvez fermer cet onglet."
	},
	soundPage: {
		header: "UniversalSoundboard est en train de s'ouvrir...",
		subhead: "Vous n'avez pas encore installé UniversalSoundboard ?"
	}
}

export var frFR = {
	...frDefaults,
	lang: "fr-FR"
}
//#endregion

export function getLocale(lang?: string) {
	if (lang == null) {
		lang = navigator?.language?.toLowerCase()
	} else {
		lang = lang.toLowerCase()
	}

	if (lang.startsWith("en")) {
		if (lang == "en-gb") return enGB
		else return enUS
	} else if (lang.startsWith("de")) {
		if (lang == "de-at") return deAT
		else if (lang == "de-ch") return deCH
		else return deDE
	} else if (lang.startsWith("fr")) {
		return frFR
	}

	return enUS
}
