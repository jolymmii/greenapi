function getData() {
	const idInstance = document.getElementById('idInstance').value
	const apiToken = document.getElementById('apiToken').value

	return { idInstance, apiToken }
}

function setResponse(data) {
	document.getElementById('response').value = JSON.stringify(data, null, 2)
}

// getSettings
async function getSettings() {
	const { idInstance, apiToken } = getData()

	try {
		const res = await fetch(
			`https://api.green-api.com/waInstance${idInstance}/getSettings/${apiToken}`,
		)

		const data = await res.json()
		setResponse(data)
	} catch (error) {
		setResponse(error)
	}
}

// getStateInstance
async function getState() {
	const { idInstance, apiToken } = getData()

	try {
		const res = await fetch(
			`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiToken}`,
		)

		const data = await res.json()
		setResponse(data)
	} catch (error) {
		setResponse(error)
	}
}

// sendMessage
async function sendMessage() {
	const { idInstance, apiToken } = getData()
	const phone = document.getElementById('phone').value
	const message = document.getElementById('message').value

	try {
		const res = await fetch(
			`https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiToken}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chatId: `${phone}@c.us`,
					message: message,
				}),
			},
		)

		const data = await res.json()
		setResponse(data)
	} catch (error) {
		setResponse(error)
	}
}

// sendFileByUrl
async function sendFile() {
	const { idInstance, apiToken } = getData()
	const phone = document.getElementById('phone').value
	const fileUrl = document.getElementById('fileUrl').value

	try {
		const res = await fetch(
			`https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiToken}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chatId: `${phone}@c.us`,
					urlFile: fileUrl,
					fileName: 'file',
				}),
			},
		)

		const data = await res.json()
		setResponse(data)
	} catch (error) {
		setResponse(error)
	}
}
