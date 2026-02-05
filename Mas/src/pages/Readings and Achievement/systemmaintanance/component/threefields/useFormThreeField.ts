import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { getBooks, getWalks } from "../../api/SystemApi";
import type { FormThreeFieldsProps, FormThreeFieldTypes } from "../../types";
import { FormSchema } from "./FormSchema";

export const useFormThreeFieldsLogic = ({
  onSubmit,
  data = [],
}: FormThreeFieldsProps) => {
  const {
    control,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm<FormThreeFieldTypes>({
    defaultValues: {
      BILLGROUP: "",
      BOOK_NO: "",
      WALK_DESCRIPTION: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const selectedGroup = watch("BILLGROUP");
  const selectedBook = watch("BOOK_NO");
  const selectedGroupObject = data.find((g) => g.GROUP_ID === selectedGroup);

  const { data: books = [] } = useQuery({
    queryKey: ["books", selectedGroup],
    queryFn: () => getBooks(selectedGroup, selectedGroupObject!.STATION_NO),
    enabled: !!selectedGroup && !!selectedGroupObject,
  });

  const { data: walks = [] } = useQuery({
    queryKey: ["walks", selectedGroup, selectedBook],
    queryFn: () => getWalks(selectedGroup, selectedGroupObject!.STATION_NO),
    enabled: !!selectedGroup && !!selectedBook && !!selectedGroupObject,
  });

  const onValidSubmit = (formData: FormThreeFieldTypes) => {
    onSubmit(formData);
  };

  const handleGroupChange = () => {
    resetField("BOOK_NO");
    resetField("WALK_DESCRIPTION");
  };

  const handleBookChange = () => {
    resetField("WALK_DESCRIPTION");
  };

  return {
    control,
    handleSubmit,
    resetField,
    watch,
    errors,
    books,
    walks,
    selectedGroup,
    selectedBook,
    onValidSubmit,
    handleGroupChange,
    handleBookChange,
  };
};
