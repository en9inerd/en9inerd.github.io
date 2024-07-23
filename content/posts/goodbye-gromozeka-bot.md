+++
title = "Goodbye, Gromozeka Bot"
date = 2023-11-05T12:10:00-05:00
aliases = ["2023/11/05/goodbye-gromozeka-bot"]

[taxonomies]
tags = ["telegram api", "nodejs", "typescript", "bot", "fetch api"]
+++

The [Gromozeka bot](https://github.com/en9inerd/gromozeka-bot) was implemented to assist Telegram users in deleting all of their messages from a chat, channel, or conversation, even without admin privileges. Official Telegram clients lack a straightforward solution for a mass message deletion, requiring users to manually select and delete messages, with a limit of 100 at a time. Gromozeka bot was aimed to solve this inconvenience.

The bot's implementation involves creating and storing a user session on the bot's side, posing a security concern regarding potential misuse by the bot owner. While it's reasonable for Telegram to prevent unauthorized user session manipulation by a bot, my implementation addresses this issue. Although not flawless, my solution ensures that only the user can utilize the created session.
<!--more-->

In my implementation:
1. Messages containing sensitive information such as phone numbers, one-time verification codes, or two-factor authentication passwords are promptly deleted by the bot.
2. For any session-related operations, the user must specify a password, utilized for encrypting/decrypting the session (using the [TeleBuilder Encryption helper](https://github.com/en9inerd/telebuilder/blob/master/src/helpers/encryption.helper.ts)) stored in an encrypted form in the database. This password, set during session creation, is distinct from the two-factor authentication password. The salt and hash of the password are stored for validation in the database.

Previously, the Gromozeka bot operated smoothly without significant issues. Telegram's only intervention was restricting the sending of one-time verification codes through messages, a restriction circumvented using the [TeleBuilder Command helper](https://github.com/en9inerd/telebuilder/blob/c4fe237f1189aea72b9be1965465fd909583f775/src/helpers/command.helper.ts#L21) - adding a whitespace between the digits, which is then removed on the bot's side.

Recently, while making enhancements to the bot, I tested session creation and revocation. Unlike before, Telegram can now detect user session creation even at the phone number entry stage, resulting in instant account deactivation. Recovering an account proved challenging, and two testing accounts are remaining deactivated.

Although I won't actively develop the bot further, the Gromozeka bot stands as an illustrative example of [TeleBuilder](https://github.com/en9inerd/telebuilder) utilization. For users seeking an alternative solution to delete messages, the [TgEraser](https://pypi.org/project/tgeraser/) command-line tool is recommended for its safety and ease of use.
