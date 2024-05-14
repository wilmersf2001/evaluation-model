import { Injectable } from '@angular/core';
import { Rubrics } from '../interfaces/rubrics';

@Injectable({
  providedIn: 'root',
})
export class RubricsService {
  dataRubrics: Rubrics[] = [
    {
      idevaluacion: 0,
      seccion: null,
      curso: null,
      proposito: null,
      feeback: null,
      hora: null,
      idfactor: 39,
      factor: 'Organizational',
      recomendacion: null,
      compromiso: null,
      indicadores: [
        {
          idindicador: 151,
          indicador:
            'Proposes problematization activities that respond to the anticipated significant situation, contextualization with the environment, cross-cutting approach, values, and institutional charisma.',
          valores: [
            {
              idvaloracion: 1,
              valoracion: 'Prior to performance conditions',
              descripcion:
                'Does not propose problematization activities related to the anticipated significant situation, contextualization with the environment, cross-cutting approach, values, and institutional charisma.',
              valor: 0,
              idescala: 581,
              dato: 0,
            },
            {
              idvaloracion: 2,
              valoracion: 'Startup performance',
              descripcion:
                'Proposes problematization activities, but these have little connection with the anticipated significant situation, contextualization with the environment, cross-cutting approach, values, and institutional charisma.',
              valor: 1,
              idescala: 582,
              dato: 0,
            },
            {
              idvaloracion: 3,
              valoracion: 'Performance in process',
              descripcion:
                'Formulates problematization activities that, overall, respond to the anticipated significant situation and show some connection with the contextualization of the environment, cross-cutting approach, values, and institutional charisma, although with some inconsistencies or areas for improvement.',
              valor: 2,
              idescala: 583,
              dato: 0,
            },
            {
              idvaloracion: 4,
              valoracion: 'Performance achieved',
              descripcion:
                'Designs coherent and relevant problematization activities that effectively respond to the anticipated significant situation, incorporating solidly the contextualization with the environment, cross-cutting approach, values, and institutional charisma.',
              valor: 3,
              idescala: 584,
              dato: 0,
            },
          ],
        },
        {
          idindicador: 152,
          indicador:
            'Develops assessment instruments (checklist, observation guide, rubric, etc.) that consider criteria based on performances or learning standards that describe competencies according to the CNEB and student characteristics (UDL).',
          valores: [
            {
              idvaloracion: 1,
              valoracion: 'Prior to performance conditions',
              descripcion:
                'Does not develop assessment instruments, nor consider criteria related to performances or learning standards established in the CNEB and student characteristics (UDL).',
              valor: 0,
              idescala: 585,
              dato: 0,
            },
            {
              idvaloracion: 2,
              valoracion: 'Startup performance',
              descripcion:
                'Develops assessment instruments, but faces difficulties in formulating criteria that are coherent with performances or learning standards of the CNEB and responsive to student characteristics (UDL).',
              valor: 1,
              idescala: 586,
              dato: 0,
            },
            {
              idvaloracion: 3,
              valoracion: 'Performance in process',
              descripcion:
                'Develops assessment instruments that include criteria aligned with performances or learning standards of the CNEB and student characteristics (UDL), although it presents some inconsistencies.',
              valor: 2,
              idescala: 587,
              dato: 0,
            },
            {
              idvaloracion: 4,
              valoracion: 'Performance achieved',
              descripcion:
                'Develops assessment instruments efficiently, selecting coherent criteria aligned with performances or learning standards of the CNEB and student characteristics (UDL), demonstrating adequate management of the intended competence.',
              valor: 3,
              idescala: 588,
              dato: 0,
            },
          ],
        },
        {
          idindicador: 153,
          indicador:
            'Establishes metacognitive strategies that promote the transfer of experiences to other learning situations, self-assessment, and the opportunity to reflect on learning.',
          valores: [
            {
              idvaloracion: 1,
              valoracion: 'Prior to performance conditions',
              descripcion:
                'Does not establish metacognitive strategies, nor promotes the transfer of experiences, self-assessment, or reflection on learning in their educational activities.',
              valor: 0,
              idescala: 589,
              dato: 0,
            },
            {
              idvaloracion: 2,
              valoracion: 'Startup performance',
              descripcion:
                'Does not establish metacognitive strategies in learning situations, thus showing limited promotion of the transfer of experiences, self-assessment, and reflection in students.',
              valor: 1,
              idescala: 590,
              dato: 0,
            },
            {
              idvaloracion: 3,
              valoracion: 'Performance in process',
              descripcion:
                'Establishes metacognitive strategies, promotes the transfer of experiences, self-assessment, and reflection in students, although not consistently or effectively.',
              valor: 2,
              idescala: 591,
              dato: 0,
            },
            {
              idvaloracion: 4,
              valoracion: 'Performance achieved',
              descripcion:
                'Establishes metacognitive strategies in various learning situations, consistently promoting the transfer of experiences, self-assessment, and the opportunity to reflect on learning in their students.',
              valor: 3,
              idescala: 592,
              dato: 0,
            },
          ],
        },
      ],
    },
    {
      idevaluacion: 0,
      seccion: null,
      curso: null,
      proposito: null,
      feeback: null,
      hora: null,
      idfactor: 40,
      factor: 'Social',
      recomendacion: null,
      compromiso: null,
      indicadores: [
        {
          idindicador: 154,
          indicador:
            'Develops habits and routines that promote healthy coexistence based on the promotion of values and institutional charisma; additionally, regulates student behavior through positive discipline and transformational leadership strategies, thus creating a conducive environment for integral development.',
          valores: [
            {
              idvaloracion: 1,
              valoracion: 'Prior to performance conditions',
              descripcion:
                'Does not evidence actions or strategies to promote habits and routines that favor healthy coexistence, nor regulates student behavior during the learning process.',
              valor: 0,
              idescala: 593,
              dato: 0,
            },
            {
              idvaloracion: 2,
              valoracion: 'Startup performance',
              descripcion:
                'Attempts to establish habits and routines that promote healthy coexistence through the promotion of values and institutional charisma, but still inconsistently or limitedly, as it only partially regulates student behavior during the learning process.',
              valor: 1,
              idescala: 594,
              dato: 0,
            },
            {
              idvaloracion: 3,
              valoracion: 'Performance in process',
              descripcion:
                'Consistently applies habits and routines that promote healthy coexistence through the promotion of values and institutional charisma, showing significant progress in regulating student behavior during the learning process, although still requiring improvements in certain areas.',
              valor: 2,
              idescala: 595,
              dato: 0,
            },
            {
              idvaloracion: 4,
              valoracion: 'Performance achieved',
              descripcion:
                'Successfully implements habits and routines that promote healthy coexistence, promoting values and institutional charisma; additionally, effectively regulates student behavior through positive discipline and transformational leadership strategies, fostering self-regulation of behavior, thus creating a conducive environment for integral development.',
              valor: 3,
              idescala: 596,
              dato: 0,
            },
          ],
        },
        {
          idindicador: 155,
          indicador:
            'Expresses oneself correctly in oral, written, and body language.',
          valores: [
            {
              idvaloracion: 1,
              valoracion: 'Prior to performance conditions',
              descripcion:
                'Communicates through oral, written, and body language, but with difficulties. Makes frequent grammatical, vocabulary, and pronunciation errors. Their writing lacks clarity for students, additionally presenting spelling and punctuation errors. Also, they do not use body language adequately to complement their communication.',
              valor: 0,
              idescala: 597,
              dato: 0,
            },
            {
              idvaloracion: 2,
              valoracion: 'Startup performance',
              descripcion:
                'Communicates through oral, written, and body language, but makes grammatical, vocabulary, pronunciation, and modulation errors (their tone of voice is flat). Their writing is not clear for students, and they use body language in a basic and limited way.',
              valor: 1,
              idescala: 598,
              dato: 0,
            },
            {
              idvaloracion: 3,
              valoracion: 'Performance in process',
              descripcion:
                'Communicates ideas clearly in oral, written, and body language. Presents some grammatical errors (spelling and punctuation), vocabulary, modulation, and pronunciation. Their writing is clear, precise, and understandable for students. They use body language to reinforce their communication.',
              valor: 2,
              idescala: 599,
              dato: 0,
            },
            {
              idvaloracion: 4,
              valoracion: 'Performance achieved',
              descripcion:
                'Expresses oneself correctly and fluently in oral, written, and body language. Masters grammar, vocabulary, modulation, and pronunciation appropriately. Their writing is clear, coherent, precise, and understandable for students, without spelling or punctuation errors. Additionally, they use body language effectively and appropriately to enrich their communication.',
              valor: 3,
              idescala: 600,
              dato: 0,
            },
          ],
        },
      ],
    },
    {
      idevaluacion: 0,
      seccion: null,
      curso: null,
      proposito: null,
      feeback: null,
      hora: null,
      idfactor: 41,
      factor: 'Pedagogical',
      recomendacion: null,
      compromiso: null,
      indicadores: [
        {
          idindicador: 157,
          indicador:
            'Develops introductory activities that retrieve prior knowledge (procedures, conceptual knowledge, cognitive skills, and learning strategies), arouses student interest, and actively engages them in the learning process.',
          valores: [
            {
              idvaloracion: 1,
              valoracion: 'Prior to performance conditions',
              descripcion:
                'Does not evidence the proposal of introductory activities that retrieve prior knowledge, nor that arouse student interest in the learning process.',
              valor: 0,
              idescala: 605,
              dato: 0,
            },
            {
              idvaloracion: 2,
              valoracion: 'Startup performance',
              descripcion:
                'Occasionally proposes introductory activities that retrieve some prior knowledge, but fails to consistently arouse student interest or actively engage them in the learning process.',
              valor: 1,
              idescala: 606,
              dato: 0,
            },
            {
              idvaloracion: 3,
              valoracion: 'Performance in process',
              descripcion:
                'Frequently develops introductory activities that retrieve prior knowledge, arouse student interest, and partially engage them in the learning process, but still needs improvement in diversifying strategies and integrating cognitive skills.',
              valor: 2,
              idescala: 607,
              dato: 0,
            },
            {
              idvaloracion: 4,
              valoracion: 'Performance achieved',
              descripcion:
                'Consistently develops introductory activities that effectively retrieve prior knowledge, arouse student interest, and actively engage them in the learning process, using various strategies and promoting the development of cognitive skills.',
              valor: 3,
              idescala: 608,
              dato: 0,
            },
          ],
        },
        {
          idindicador: 158,
          indicador:
            'Demonstrates mastery of the specialty (content, procedures, skills, and particular strategies of the area) during the presentation, explanation, or teaching of the topic.',
          valores: [
            {
              idvaloracion: 1,
              valoracion: 'Prior to performance conditions',
              descripcion:
                'Does not show knowledge, skills, or strategies related to the specialty in teaching the topic, showing a complete lack of mastery and preparation in the area.',
              valor: 0,
              idescala: 609,
              dato: 0,
            },
            {
              idvaloracion: 2,
              valoracion: 'Startup performance',
              descripcion:
                'Shows basic knowledge of the specialty and makes isolated attempts to apply procedures, skills, and strategies in teaching the topic, but with evident limitations that affect the quality of the presentation and understanding by the students.',
              valor: 1,
              idescala: 644,
              dato: 0,
            },
            {
              idvaloracion: 3,
              valoracion: 'Performance in process',
              descripcion:
                "Applies knowledge, skills, and strategies specific to the specialty appropriately in most cases, although occasionally may present inconsistencies or inaccuracies during the teaching of the topic, without significantly affecting students' understanding.",
              valor: 2,
              idescala: 610,
              dato: 0,
            },
            {
              idvaloracion: 4,
              valoracion: 'Performance achieved',
              descripcion:
                "Demonstrates a solid mastery of the specialty, integrating efficiently and effectively the content, procedures, skills, and strategies in teaching the topic, achieving a clear, coherent, and enriching presentation that promotes students' understanding and learning.",
              valor: 3,
              idescala: 611,
              dato: 0,
            },
          ],
        },
        {
          idindicador: 159,
          indicador:
            'Implements activities that arise from cognitive conflict to establish a learning sequence that involves higher-order skills (reasoning, critical thinking, and creativity).',
          valores: [
            {
              idvaloracion: 1,
              valoracion: 'Prior to performance conditions',
              descripcion:
                'Does not identify or implement activities that generate cognitive conflict or incorporate higher-order skills into the learning sequence, showing a lack of knowledge or understanding of these concepts.',
              valor: 0,
              idescala: 612,
              dato: 0,
            },
            {
              idvaloracion: 2,
              valoracion: 'Startup performance',
              descripcion:
                'Implements activities that generate cognitive conflict, but in an incipient manner and with limited integration of higher-order skills (reasoning, critical thinking, and creativity) into the learning sequence.',
              valor: 1,
              idescala: 613,
              dato: 0,
            },
            {
              idvaloracion: 3,
              valoracion: 'Performance in process',
              descripcion:
                'Implements activities that generate cognitive conflict and promote higher-order skills in the learning sequence, although not always efficiently or adequately, as adaptation or diversification of activities for all students is not evidenced.',
              valor: 2,
              idescala: 614,
              dato: 0,
            },
            {
              idvaloracion: 4,
              valoracion: 'Performance achieved',
              descripcion:
                'Effectively and consistently implements activities that arise from cognitive conflict, establishing a learning sequence that involves higher-order skills (reasoning, critical thinking, and creativity) appropriately and adapted to the needs of all students.',
              valor: 3,
              idescala: 615,
              dato: 0,
            },
          ],
        },
        {
          idindicador: 160,
          indicador:
            'Promotes collaborative learning among students according to the curriculum area approach to manage and consolidate the achievement of the expected competency level.',
          valores: [
            {
              idvaloracion: 1,
              valoracion: 'Prior to performance conditions',
              descripcion:
                'Does not show intentions to promote collaborative learning among students, nor takes actions to apply the curriculum area approach in managing and consolidating the achievement of the expected competency level.',
              valor: 0,
              idescala: 616,
              dato: 0,
            },
            {
              idvaloracion: 2,
              valoracion: 'Startup performance',
              descripcion:
                'Shows incipient efforts to promote collaborative learning among students and applies the curriculum area approach in managing and consolidating the achievement of the expected competency level in a basic manner, although limited and not very effective.',
              valor: 1,
              idescala: 617,
              dato: 0,
            },
            {
              idvaloracion: 3,
              valoracion: 'Performance in process',
              descripcion:
                'Partially fosters collaborative learning among students, applying the curriculum area approach in managing and consolidating the achievement of the expected competency level, although still needs improvement in specific aspects to ensure a more effective and consistent application.',
              valor: 2,
              idescala: 618,
              dato: 0,
            },
            {
              idvaloracion: 4,
              valoracion: 'Performance achieved',
              descripcion:
                'Effectively and systematically promotes collaborative learning among students, successfully applying the curriculum area approach in managing and consolidating the achievement of the expected competency level, demonstrating a high degree of skill in the implementation of pedagogical and collaborative strategies.',
              valor: 3,
              idescala: 619,
              dato: 0,
            },
          ],
        },
      ],
    },
    {
      idevaluacion: 0,
      seccion: null,
      curso: null,
      proposito: null,
      feeback: null,
      hora: null,
      idfactor: 42,
      factor: 'Technological',
      recomendacion: null,
      compromiso: null,
      indicadores: [
        {
          idindicador: 164,
          indicador:
            'Foresees the spaces, materials, resources, and equipment that will be used in the development of the session.',
          valores: [
            {
              idvaloracion: 1,
              valoracion: 'Prior to performance conditions',
              descripcion:
                'Does not identify the spaces, materials, resources, and equipment necessary for the development of the session, showing a lack of preparation and prior planning.',
              valor: 0,
              idescala: 632,
              dato: 0,
            },
            {
              idvaloracion: 2,
              valoracion: 'Startup performance',
              descripcion:
                'Uses the spaces, materials, resources, and equipment necessary for the development of the session, but these are improvised, and assistance and guidance are required for their proper management.',
              valor: 1,
              idescala: 633,
              dato: 0,
            },
            {
              idvaloracion: 3,
              valoracion: 'Performance in process',
              descripcion:
                'Selects and organizes the spaces, materials, resources, and equipment required for the development of the session, demonstrating conscious and coherent planning, although there are aspects to improve.',
              valor: 2,
              idescala: 634,
              dato: 0,
            },
            {
              idvaloracion: 4,
              valoracion: 'Performance achieved',
              descripcion:
                'Selects and organizes efficiently and autonomously all the spaces, materials, resources, and equipment necessary for the development of the session, ensuring an environment conducive and optimized for student learning.',
              valor: 3,
              idescala: 635,
              dato: 0,
            },
          ],
        },
        {
          idindicador: 165,
          indicador:
            'Develops interactive and multimedia content using technological tools, learning management software, and collaboration tools, adapting teaching to the needs (UDL) and technological skills of students.',
          valores: [
            {
              idvaloracion: 1,
              valoracion: 'Prior to performance conditions',
              descripcion:
                'Does not develop interactive or multimedia content, nor uses technological tools, learning management software, or collaboration tools.',
              valor: 0,
              idescala: 636,
              dato: 0,
            },
            {
              idvaloracion: 2,
              valoracion: 'Startup performance',
              descripcion:
                'Develops interactive and multimedia content or uses technological tools, learning management software, and collaboration tools, but not significantly because it does not respond to the technological skills of students.',
              valor: 1,
              idescala: 637,
              dato: 0,
            },
            {
              idvaloracion: 3,
              valoracion: 'Performance in process',
              descripcion:
                'Develops interactive and multimedia content or uses technological tools, learning management software, and collaboration tools, but it is not significant because it does not respond to the technological skills of students even when adapting teaching to the needs (UDL), so it requires improvements in certain areas.',
              valor: 2,
              idescala: 638,
              dato: 0,
            },
            {
              idvaloracion: 4,
              valoracion: 'Performance achieved',
              descripcion:
                'Develops efficiently and autonomously interactive and multimedia content using technological tools, learning management software, and collaboration tools, adapting teaching to the needs (UDL) and technological skills of students to improve teaching, thus ensuring an environment conducive and optimized for student learning.',
              valor: 3,
              idescala: 639,
              dato: 0,
            },
          ],
        },
        {
          idindicador: 166,
          indicador:
            "Maximizes the time dedicated to the student's performance level in the development of activities that manage the expected competence in the learning process.",
          valores: [
            {
              idvaloracion: 1,
              valoracion: 'Prior to performance conditions',
              descripcion:
                "Does not control the timing of activities, so the student's performance level and the management of the expected competence in the learning process are not evident.",
              valor: 0,
              idescala: 640,
              dato: 0,
            },
            {
              idvaloracion: 2,
              valoracion: 'Startup performance',
              descripcion:
                "Encounters difficulties in effectively managing the timing of activities related to the student's performance level and the management of the expected competence in the learning process.",
              valor: 1,
              idescala: 641,
              dato: 0,
            },
            {
              idvaloracion: 3,
              valoracion: 'Performance in process',
              descripcion:
                "Manages the timing of activities related to the student's performance level and the management of the expected competence in the learning process, but can still improve effectiveness in time utilization.",
              valor: 2,
              idescala: 642,
              dato: 0,
            },
            {
              idvaloracion: 4,
              valoracion: 'Performance achieved',
              descripcion:
                "Optimizes the time dedicated to the student's performance level by implementing effective and relevant activities that manage the expected competence in the learning process, demonstrating a focus on the development of student skills and abilities.",
              valor: 3,
              idescala: 643,
              dato: 0,
            },
          ],
        },
      ],
    },
  ];

  constructor() {}

  getRubrics() {
    return this.dataRubrics;
  }
}
