import httpClient from 'axios'

const FACEBOOK_API_ENDPOINT = 'https://graph.facebook.com/v2.6/me/messages?access_token=EAASZCCCLpTtcBAFYrj81G5SowDkGr7ZA9NqYvcE7m618V09ZBHZBxrJXKwtGvFCrZA1HfPK7qTJpLj9ktpOdWFl2iAFk1XuUPfndfPwKR3ZASZBR1NgUVfG3SZCE7hwLit4ZBKUEUDlFk2JvrlDazWta4UPldyjoSrah9VBghD3YGpZC7zVv6dD26W'

exports.sendMessage = (userId, message) => {
    const payload = {
        recipient: {
            id: userId
        },
        message: {
            text: message
        }
    }
    return httpClient.post(FACEBOOK_API_ENDPOINT, payload)
}