export const sendTokens = (req, res) => {
    const tokens = req.tokens;
    res.status(200).json({
        tokens,
        user: {
            username: req.user.username
        }
    })
};
