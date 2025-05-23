import { Service } from '../service';
import { Client } from '../client';
import type { Models } from '../models';
import { AuthenticatorType } from '../enums/authenticator-type';
import { AuthenticationFactor } from '../enums/authentication-factor';
import { OAuthProvider } from '../enums/o-auth-provider';
export declare class Account extends Service {
    constructor(client: Client);
    /**
     * Get the currently logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    get<Preferences extends Models.Preferences>(): Promise<Models.User<Preferences>>;
    /**
     * Use this endpoint to allow a new user to register a new account in your
     * project. After the user registration completes successfully, you can use
     * the
     * [/account/verfication](https://appwrite.io/docs/references/cloud/client-web/account#createVerification)
     * route to start verifying the user email address. To allow the new user to
     * login to their new account, you need to create a new [account
     * session](https://appwrite.io/docs/references/cloud/client-web/account#createEmailSession).
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    create<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>>;
    /**
     * Update currently logged in user account email address. After changing user
     * address, the user confirmation status will get reset. A new confirmation
     * email is not sent automatically however you can use the send confirmation
     * email endpoint again to send the confirmation email. For security measures,
     * user password is required to complete this request.
     * This endpoint can also be used to convert an anonymous account to a normal
     * one, by passing an email address and a new password.
     *
     *
     * @param {string} email
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateEmail<Preferences extends Models.Preferences>(email: string, password: string): Promise<Models.User<Preferences>>;
    /**
     * Get the list of identities for the currently logged in user.
     *
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    listIdentities(queries?: string[]): Promise<Models.IdentityList>;
    /**
     * Delete an identity by its unique ID.
     *
     * @param {string} identityId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    deleteIdentity(identityId: string): Promise<{}>;
    /**
     * Use this endpoint to create a JSON Web Token. You can use the resulting JWT
     * to authenticate on behalf of the current user when working with the
     * Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes
     * from its creation and will be invalid if the user will logout in that time
     * frame.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createJWT(): Promise<Models.Jwt>;
    /**
     * Get the list of latest security activity logs for the currently logged in
     * user. Each log returns user IP address, location and date and time of log.
     *
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    listLogs(queries?: string[]): Promise<Models.LogList>;
    /**
     * Enable or disable MFA on an account.
     *
     * @param {boolean} mfa
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateMFA<Preferences extends Models.Preferences>(mfa: boolean): Promise<Models.User<Preferences>>;
    /**
     * Add an authenticator app to be used as an MFA factor. Verify the
     * authenticator using the [verify
     * authenticator](/docs/references/cloud/client-web/account#updateMfaAuthenticator)
     * method.
     *
     * @param {AuthenticatorType} type
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createMfaAuthenticator(type: AuthenticatorType): Promise<Models.MfaType>;
    /**
     * Verify an authenticator app after adding it using the [add
     * authenticator](/docs/references/cloud/client-web/account#createMfaAuthenticator)
     * method.
     *
     * @param {AuthenticatorType} type
     * @param {string} otp
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateMfaAuthenticator<Preferences extends Models.Preferences>(type: AuthenticatorType, otp: string): Promise<Models.User<Preferences>>;
    /**
     * Delete an authenticator for a user by ID.
     *
     * @param {AuthenticatorType} type
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    deleteMfaAuthenticator(type: AuthenticatorType): Promise<{}>;
    /**
     * Begin the process of MFA verification after sign-in. Finish the flow with
     * [updateMfaChallenge](/docs/references/cloud/client-web/account#updateMfaChallenge)
     * method.
     *
     * @param {AuthenticationFactor} factor
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createMfaChallenge(factor: AuthenticationFactor): Promise<Models.MfaChallenge>;
    /**
     * Complete the MFA challenge by providing the one-time password. Finish the
     * process of MFA verification by providing the one-time password. To begin
     * the flow, use
     * [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge)
     * method.
     *
     * @param {string} challengeId
     * @param {string} otp
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateMfaChallenge(challengeId: string, otp: string): Promise<Models.Session>;
    /**
     * List the factors available on the account to be used as a MFA challange.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    listMfaFactors(): Promise<Models.MfaFactors>;
    /**
     * Get recovery codes that can be used as backup for MFA flow. Before getting
     * codes, they must be generated using
     * [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes)
     * method. An OTP challenge is required to read recovery codes.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    getMfaRecoveryCodes(): Promise<Models.MfaRecoveryCodes>;
    /**
     * Generate recovery codes as backup for MFA flow. It's recommended to
     * generate and show then immediately after user successfully adds their
     * authehticator. Recovery codes can be used as a MFA verification type in
     * [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge)
     * method.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createMfaRecoveryCodes(): Promise<Models.MfaRecoveryCodes>;
    /**
     * Regenerate recovery codes that can be used as backup for MFA flow. Before
     * regenerating codes, they must be first generated using
     * [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes)
     * method. An OTP challenge is required to regenreate recovery codes.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateMfaRecoveryCodes(): Promise<Models.MfaRecoveryCodes>;
    /**
     * Update currently logged in user account name.
     *
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateName<Preferences extends Models.Preferences>(name: string): Promise<Models.User<Preferences>>;
    /**
     * Update currently logged in user password. For validation, user is required
     * to pass in the new password, and the old password. For users created with
     * OAuth, Team Invites and Magic URL, oldPassword is optional.
     *
     * @param {string} password
     * @param {string} oldPassword
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updatePassword<Preferences extends Models.Preferences>(password: string, oldPassword?: string): Promise<Models.User<Preferences>>;
    /**
     * Update the currently logged in user's phone number. After updating the
     * phone number, the phone verification status will be reset. A confirmation
     * SMS is not sent automatically, however you can use the [POST
     * /account/verification/phone](https://appwrite.io/docs/references/cloud/client-web/account#createPhoneVerification)
     * endpoint to send a confirmation SMS.
     *
     * @param {string} phone
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updatePhone<Preferences extends Models.Preferences>(phone: string, password: string): Promise<Models.User<Preferences>>;
    /**
     * Get the preferences as a key-value object for the currently logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    getPrefs<Preferences extends Models.Preferences>(): Promise<Preferences>;
    /**
     * Update currently logged in user account preferences. The object you pass is
     * stored as is, and replaces any previous value. The maximum allowed prefs
     * size is 64kB and throws error if exceeded.
     *
     * @param {object} prefs
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updatePrefs<Preferences extends Models.Preferences>(prefs: object): Promise<Models.User<Preferences>>;
    /**
     * Sends the user an email with a temporary secret key for password reset.
     * When the user clicks the confirmation link he is redirected back to your
     * app password reset URL with the secret key and email address values
     * attached to the URL query string. Use the query string params to submit a
     * request to the [PUT
     * /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#updateRecovery)
     * endpoint to complete the process. The verification link sent to the user's
     * email address is valid for 1 hour.
     *
     * @param {string} email
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createRecovery(email: string, url: string): Promise<Models.Token>;
    /**
     * Use this endpoint to complete the user account password reset. Both the
     * **userId** and **secret** arguments will be passed as query parameters to
     * the redirect URL you have provided when sending your request to the [POST
     * /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#createRecovery)
     * endpoint.
     *
     * Please note that in order to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
     * the only valid redirect URLs are the ones from domains you have set when
     * adding your platforms in the console interface.
     *
     * @param {string} userId
     * @param {string} secret
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateRecovery(userId: string, secret: string, password: string): Promise<Models.Token>;
    /**
     * Get the list of active sessions across different devices for the currently
     * logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    listSessions(): Promise<Models.SessionList>;
    /**
     * Delete all sessions from the user account and remove any sessions cookies
     * from the end client.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    deleteSessions(): Promise<{}>;
    /**
     * Use this endpoint to allow a new user to register an anonymous account in
     * your project. This route will also create a new session for the user. To
     * allow the new user to convert an anonymous account to a normal account, you
     * need to update its [email and
     * password](https://appwrite.io/docs/references/cloud/client-web/account#updateEmail)
     * or create an [OAuth2
     * session](https://appwrite.io/docs/references/cloud/client-web/account#CreateOAuth2Session).
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createAnonymousSession(): Promise<Models.Session>;
    /**
     * Allow the user to login into their account by providing a valid email and
     * password combination. This route will create a new session for the user.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {string} email
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createEmailPasswordSession(email: string, password: string): Promise<Models.Session>;
    /**
     * Use this endpoint to create a session from token. Provide the **userId**
     * and **secret** parameters from the successful response of authentication
     * flows initiated by token creation. For example, magic URL and phone login.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateMagicURLSession(userId: string, secret: string): Promise<Models.Session>;
    /**
     * Allow the user to login to their account using the OAuth2 provider of their
     * choice. Each OAuth2 provider should be enabled from the Appwrite console
     * first. Use the success and failure arguments to provide a redirect URL's
     * back to your app when login is completed.
     *
     * If there is already an active session, the new session will be attached to
     * the logged-in account. If there are no active sessions, the server will
     * attempt to look for a user with the same email address as the email
     * received from the OAuth2 provider and attach the new session to the
     * existing user. If no matching user is found - the server will create a new
     * user.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     *
     *
     * @param {OAuthProvider} provider
     * @param {string} success
     * @param {string} failure
     * @param {string[]} scopes
     * @throws {AppwriteException}
     * @returns {void|string}
    */
    createOAuth2Session(provider: OAuthProvider, success?: string, failure?: string, scopes?: string[]): void | URL;
    /**
     * Use this endpoint to create a session from token. Provide the **userId**
     * and **secret** parameters from the successful response of authentication
     * flows initiated by token creation. For example, magic URL and phone login.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updatePhoneSession(userId: string, secret: string): Promise<Models.Session>;
    /**
     * Use this endpoint to create a session from token. Provide the **userId**
     * and **secret** parameters from the successful response of authentication
     * flows initiated by token creation. For example, magic URL and phone login.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createSession(userId: string, secret: string): Promise<Models.Session>;
    /**
     * Use this endpoint to get a logged in user's session using a Session ID.
     * Inputting 'current' will return the current session being used.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    getSession(sessionId: string): Promise<Models.Session>;
    /**
     * Use this endpoint to extend a session's length. Extending a session is
     * useful when session expiry is short. If the session was created using an
     * OAuth provider, this endpoint refreshes the access token from the provider.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateSession(sessionId: string): Promise<Models.Session>;
    /**
     * Logout the user. Use 'current' as the session ID to logout on this device,
     * use a session ID to logout on another device. If you're looking to logout
     * the user on all devices, use [Delete
     * Sessions](https://appwrite.io/docs/references/cloud/client-web/account#deleteSessions)
     * instead.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    deleteSession(sessionId: string): Promise<{}>;
    /**
     * Block the currently logged in user account. Behind the scene, the user
     * record is not deleted but permanently blocked from any access. To
     * completely delete a user, use the Users API instead.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateStatus<Preferences extends Models.Preferences>(): Promise<Models.User<Preferences>>;
    /**
     * Use this endpoint to register a device for push notifications. Provide a
     * target ID (custom or generated using ID.unique()), a device identifier
     * (usually a device token), and optionally specify which provider should send
     * notifications to this target. The target is automatically linked to the
     * current session and includes device information like brand and model.
     *
     * @param {string} targetId
     * @param {string} identifier
     * @param {string} providerId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createPushTarget(targetId: string, identifier: string, providerId?: string): Promise<Models.Target>;
    /**
     * Update the currently logged in user's push notification target. You can
     * modify the target's identifier (device token) and provider ID (token,
     * email, phone etc.). The target must exist and belong to the current user.
     * If you change the provider ID, notifications will be sent through the new
     * messaging provider instead.
     *
     * @param {string} targetId
     * @param {string} identifier
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updatePushTarget(targetId: string, identifier: string): Promise<Models.Target>;
    /**
     * Delete a push notification target for the currently logged in user. After
     * deletion, the device will no longer receive push notifications. The target
     * must exist and belong to the current user.
     *
     * @param {string} targetId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    deletePushTarget(targetId: string): Promise<{}>;
    /**
     * Sends the user an email with a secret key for creating a session. If the
     * provided user ID has not be registered, a new user will be created. Use the
     * returned user ID and secret and submit a request to the [POST
     * /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
     * endpoint to complete the login process. The secret sent to the user's email
     * is valid for 15 minutes.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {string} userId
     * @param {string} email
     * @param {boolean} phrase
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createEmailToken(userId: string, email: string, phrase?: boolean): Promise<Models.Token>;
    /**
     * Sends the user an email with a secret key for creating a session. If the
     * provided user ID has not been registered, a new user will be created. When
     * the user clicks the link in the email, the user is redirected back to the
     * URL you provided with the secret key and userId values attached to the URL
     * query string. Use the query string parameters to submit a request to the
     * [POST
     * /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
     * endpoint to complete the login process. The link sent to the user's email
     * address is valid for 1 hour.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     *
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} url
     * @param {boolean} phrase
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createMagicURLToken(userId: string, email: string, url?: string, phrase?: boolean): Promise<Models.Token>;
    /**
     * Allow the user to login to their account using the OAuth2 provider of their
     * choice. Each OAuth2 provider should be enabled from the Appwrite console
     * first. Use the success and failure arguments to provide a redirect URL's
     * back to your app when login is completed.
     *
     * If authentication succeeds, `userId` and `secret` of a token will be
     * appended to the success URL as query parameters. These can be used to
     * create a new session using the [Create
     * session](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
     * endpoint.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {OAuthProvider} provider
     * @param {string} success
     * @param {string} failure
     * @param {string[]} scopes
     * @throws {AppwriteException}
     * @returns {void|string}
    */
    createOAuth2Token(provider: OAuthProvider, success?: string, failure?: string, scopes?: string[]): void | URL;
    /**
     * Sends the user an SMS with a secret key for creating a session. If the
     * provided user ID has not be registered, a new user will be created. Use the
     * returned user ID and secret and submit a request to the [POST
     * /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
     * endpoint to complete the login process. The secret sent to the user's phone
     * is valid for 15 minutes.
     *
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {string} userId
     * @param {string} phone
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createPhoneToken(userId: string, phone: string): Promise<Models.Token>;
    /**
     * Use this endpoint to send a verification message to your user email address
     * to confirm they are the valid owners of that address. Both the **userId**
     * and **secret** arguments will be passed as query parameters to the URL you
     * have provided to be attached to the verification email. The provided URL
     * should redirect the user back to your app and allow you to complete the
     * verification process by verifying both the **userId** and **secret**
     * parameters. Learn more about how to [complete the verification
     * process](https://appwrite.io/docs/references/cloud/client-web/account#updateVerification).
     * The verification link sent to the user's email address is valid for 7 days.
     *
     * Please note that in order to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md),
     * the only valid redirect URLs are the ones from domains you have set when
     * adding your platforms in the console interface.
     *
     *
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createVerification(url: string): Promise<Models.Token>;
    /**
     * Use this endpoint to complete the user email verification process. Use both
     * the **userId** and **secret** parameters that were attached to your app URL
     * to verify the user email ownership. If confirmed this route will return a
     * 200 status code.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateVerification(userId: string, secret: string): Promise<Models.Token>;
    /**
     * Use this endpoint to send a verification SMS to the currently logged in
     * user. This endpoint is meant for use after updating a user's phone number
     * using the
     * [accountUpdatePhone](https://appwrite.io/docs/references/cloud/client-web/account#updatePhone)
     * endpoint. Learn more about how to [complete the verification
     * process](https://appwrite.io/docs/references/cloud/client-web/account#updatePhoneVerification).
     * The verification code sent to the user's phone number is valid for 15
     * minutes.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createPhoneVerification(): Promise<Models.Token>;
    /**
     * Use this endpoint to complete the user phone verification process. Use the
     * **userId** and **secret** that were sent to your user's phone number to
     * verify the user email ownership. If confirmed this route will return a 200
     * status code.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updatePhoneVerification(userId: string, secret: string): Promise<Models.Token>;
}
