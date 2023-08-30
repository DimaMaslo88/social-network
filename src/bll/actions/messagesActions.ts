export type MessagesActionsType = ReturnType<typeof setMessages>
export const setMessages = (message: string) => {
    return {
        type: 'message/SET-MESSAGE',
        message
    } as const
}
