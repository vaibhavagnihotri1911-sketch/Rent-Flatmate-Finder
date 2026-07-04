function compatibility(listing, tenant)
{
    let score = 0;
    let explanation = [];

    if (
        listing.location.toLowerCase() ===
        tenant.preferredLocation.toLowerCase()
    )
    {
        score += 50;
        explanation.push("Preferred location matches.");
    }

    if (
        listing.rent >= tenant.budgetMin &&
        listing.rent <= tenant.budgetMax
    )
    {
        score += 50;
        explanation.push("Rent fits budget.");
    }

    return {
        score,
        explanation: explanation.join(" ")
    };
}

module.exports = compatibility;