export const AddressForm = () => {
  return (
    <div
      style={{
        marginBottom: "30px",
      }}
    >
      <h3
        style={{
          marginBottom: "15px",
        }}
      >
        Address
      </h3>
      <input
        type="text"
        placeholder="FullName"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      />
      <input
        type="text"
        placeholder="Country"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      />
      <input
        type="text"
        placeholder="Street Address"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      />
      <input
        type="text"
        placeholder="City"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="State"
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
        <input
          type="text"
          placeholder="Zip Code"
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
};
