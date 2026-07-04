The platform has three roles:

1\. Owner

2\. Tenant

3\. Admin



Owners create room listings.

Tenants create preference profiles.



A compatibility engine compares:

\- Preferred location

\- Budget range



If an LLM is available, it can generate explanations.

Otherwise, a rule-based fallback is used.



Chat can be implemented using Socket.io.

Messages are stored in MongoDB.



Notifications are sent when:

\- A tenant expresses interest.

\- The owner accepts or rejects.

