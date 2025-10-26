import SectionTitle from "./SectionTitle";

interface Props {
    id: string;
    title: string;
    description: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ id, title, description, children }: React.PropsWithChildren<Props>) => {
    // Split title by <br /> or \n for line breaks
    const titleParts = title.split('<br />');

    return (
        <section id={id} className="py-10 lg:py-20">
            <SectionTitle>
                <h2 className="text-center mb-4">
                    {titleParts.length > 1 ? (
                        <>
                            {titleParts.map((part, index) => (
                                <span key={index}>
                                    {part}
                                    {index < titleParts.length - 1 && <br />}
                                </span>
                            ))}
                        </>
                    ) : (
                        title
                    )}
                </h2>
            </SectionTitle>
            <p className="mb-12 text-center">{description}</p>
            {children}
        </section>
    )
}

export default Section