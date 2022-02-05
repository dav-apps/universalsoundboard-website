//#region en
const enDefaults = {
	lang: "en",
	upgradePage: {
		header: "Thank you for upgrading!",
		errorHeader: "An error occured",
		errorMessage: "There was an error while processing your payment. Please try it again.",
		closeTabMessage: "You can close this tab."
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
		errorMessage: "Es gab einen Fehler beim Bearbeiten deiner Zahlung. Bitte versuche es nochmal.",
		closeTabMessage: "Du kannst diesen Tab schließen."
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
		errorMessage: "Il y a eu une erreur lors du traitement de ton paiement. Merci de réessayer.",
		closeTabMessage: "Vous pouvez fermer cet onglet."
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