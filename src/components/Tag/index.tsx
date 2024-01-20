type TagProps = {
  availability: string;
  price: string;
};

export function Tag({ availability, price }: TagProps) {
  return (
    <div>
      <span>{availability}</span>
      <span>{price}</span>
    </div>
  );
}