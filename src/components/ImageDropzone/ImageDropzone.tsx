import { useState } from 'react';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import { Group, Image, rem, Text } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

interface IImageDropzoneProps {
  onFilesChange: (files: File[]) => void;
}

export const ImageDropzone: React.FC<IImageDropzoneProps> = ({ onFilesChange }) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    onFilesChange(acceptedFiles);
  };

  return (
    <Dropzone
      style={{ backgroundColor: 'var(--primary-hover)' }}
      radius="xl"
      onDrop={handleDrop}
      accept={IMAGE_MIME_TYPE}
      multiple
    >
      <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
            stroke={1.5}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
            stroke={1.5}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
            stroke={1.5}
          />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" c="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
      <Group>
        {files.map((file, index) => (
          <Image key={index} src={URL.createObjectURL(file)} alt={`preview ${index}`} width={50} />
        ))}
      </Group>
    </Dropzone>
  );
};
