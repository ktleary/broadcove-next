import Image from "next/image";

const ClientLogo = ({ clientName, imagePath, altText }) => {
  return (
    <div
      className="client-logo-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 200,
        width: 200,
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "#f0f0f0",
      }}
    >
      <div>
        <Image
          src={imagePath}
          alt={altText || `Logo of ${clientName}`}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default ClientLogo;
