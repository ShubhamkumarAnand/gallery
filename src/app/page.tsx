const mockUrls = [
  "https://utfs.io/f/1033e0da-3de9-4541-b772-a5a1bf9ecce8-mehm61.jpeg",
  "https://utfs.io/f/0c4537f3-eeba-4939-b3d4-e8151dadc75a-nz3adf.jpeg",
  "https://utfs.io/f/dbeed4a4-45d4-4d4a-9dcd-27e3ba517487-uqe41n.jpg",
  "https://utfs.io/f/3f03b6a1-cab4-4f22-b52d-7e18f319d8cd-oymriy.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Gallery application!(Work in Progress!)
    </main>
  );
}
