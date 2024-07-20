import "./style.scss";

export const Status = ({ status }: { status: string }) => {
  return (
    <>
      <p className={`${status} status`}>{status}</p>
    </>
  );
};
